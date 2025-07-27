import { useMutation, useQuery } from '@apollo/client';
import React, { useContext, useEffect, useRef, useState } from 'react';
import Bowser from 'bowser';
import { isBrowserSupported } from 'livekit-client';
import Session from '/imports/ui/services/storage/in-memory';
import {
  getUserCurrent,
  GetUserCurrentResponse,
  getUserInfo,
  GetUserInfoResponse,
  userJoinMutation,
} from './queries';
import { setAuthData } from '/imports/ui/core/local-states/useAuthData';
import MeetingEndedContainer from '../../meeting-ended/component';
import { setUserDataToSessionStorage } from './service';
import { LoadingContext } from '../../common/loading-screen/loading-screen-HOC/component';
import useDeduplicatedSubscription from '/imports/ui/core/hooks/useDeduplicatedSubscription';
import logger from '/imports/startup/client/logger';
import deviceInfo from '/imports/utils/deviceInfo';
import GuestWaitContainer, { GUEST_STATUSES } from '../guest-wait/component';
import Legacy from '/imports/ui/components/legacy/component';
import PluginTopLevelManager from '/imports/ui/components/plugin-top-level-manager/component';

const connectionTimeout = 60000;
const MESSAGE_TIMEOUT = 3000;

const PresenceManager: React.FC<any> = (props) => {
  const {
    authToken,
    children,
    logoutUrl,
    meetingId,
    meetingName,
    userName,
    extId,
    userId,
    joinErrorCode,
    joinErrorMessage,
    joined,
    meetingEnded,
    endedReasonCode,
    endedBy,
    ejectReasonCode,
    bannerColor,
    bannerText,
    customLogoUrl,
    customDarkLogoUrl,
    loggedOut,
    guestLobbyMessage,
    guestStatus,
    positionInWaitingQueue,
    isSupportedBrowser,
    hasWebrtcSupport,
  } = props;

  const [allowToRender, setAllowToRender] = useState(false);
  const [dispatchUserJoin] = useMutation(userJoinMutation);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const loadingContextInfo = useContext(LoadingContext);
  const [isGuestAllowed, setIsGuestAllowed] = useState(guestStatus === GUEST_STATUSES.ALLOW);

  useEffect(() => {
    const allowed = guestStatus === GUEST_STATUSES.ALLOW;
    if (allowed) {
      setTimeout(() => setIsGuestAllowed(true), MESSAGE_TIMEOUT);
    } else {
      setIsGuestAllowed(false);
    }
  }, [guestStatus]);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const sessionToken = urlParams.get('sessionToken') as string;

    console.log('[PresenceManager] Session token:', sessionToken);

    const auth = {
      meetingId, userId, authToken, logoutUrl, sessionToken, userName, extId, meetingName,
    };
    console.log('[PresenceManager] Auth data:', auth);

    setAuthData(auth);
    setUserDataToSessionStorage({
      ...auth,
      customLogoUrl,
      customDarkLogoUrl,
    });
  }, []);

  useEffect(() => {
    if (isGuestAllowed) {
      timeoutRef.current = setTimeout(() => {
        loadingContextInfo.setLoading(false);
        throw new Error('Authentication timeout');
      }, connectionTimeout);
    }
  }, [isGuestAllowed]);

  useEffect(() => {
    if (bannerColor || bannerText) {
      Session.setItem('bannerText', bannerText);
      Session.setItem('bannerColor', bannerColor);
      console.log('[PresenceManager] Banner set:', { bannerText, bannerColor });
    }
  }, [bannerColor, bannerText]);

  useEffect(() => {
    if (authToken && !joined && isGuestAllowed) {
      console.log('[PresenceManager] Dispatching userJoin mutation');
      dispatchUserJoin({
        variables: {
          authToken,
          clientType: 'HTML5',
          clientIsMobile: deviceInfo.isMobile,
        },
      });
    }
  }, [joined, authToken, isGuestAllowed]);

  useEffect(() => {
    if (joined) {
      clearTimeout(timeoutRef.current);
      console.log('[PresenceManager] User joined, allowing render');
      setAllowToRender(true);
    }
  }, [joined]);

  useEffect(() => {
    if (joinErrorCode) {
      console.warn('[PresenceManager] Join error:', joinErrorCode, joinErrorMessage);
      loadingContextInfo.setLoading(false);
    }
  }, [joinErrorCode, joinErrorMessage]);

  const errorCode = loggedOut ? 'user_logged_out_reason' : joinErrorCode || ejectReasonCode;

  if (isSupportedBrowser === false || hasWebrtcSupport === false) {
    const reason = isSupportedBrowser === false ? 'USER_AGENT' : 'WEBRTC';
    const message = isSupportedBrowser === false
      ? 'The browser is not supported or is using an outdated version.'
      : 'WebRTC is not supported in this browser.';
    console.warn('[PresenceManager] Unsupported browser:', reason);
    return <Legacy setLoading={loadingContextInfo.setLoading} />;
  }

  const userCurrentlyInMeeting = allowToRender && !(meetingEnded || joinErrorCode || ejectReasonCode || loggedOut);
  console.log('[PresenceManager] Render state:', { userCurrentlyInMeeting });

  return (
    <>
      <PluginTopLevelManager currentUserCurrentlyInMeeting={userCurrentlyInMeeting} />
      {userCurrentlyInMeeting && children}
      {(meetingEnded || joinErrorCode || ejectReasonCode || loggedOut) && (
        <MeetingEndedContainer
          meetingEndedCode={endedReasonCode}
          endedBy={endedBy}
          joinErrorCode={errorCode}
        />
      )}
      {!isGuestAllowed && !(meetingEnded || joinErrorCode || ejectReasonCode || loggedOut) && (
        <GuestWaitContainer
          guestLobbyMessage={guestLobbyMessage}
          guestStatus={guestStatus}
          logoutUrl={logoutUrl}
          positionInWaitingQueue={positionInWaitingQueue}
        />
      )}
    </>
  );
};

export default PresenceManager;
