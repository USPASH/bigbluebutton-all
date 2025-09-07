const settings= {
    "app": {
        "cdn": "",
        "appName": "Jehat Video Conference",
        "autoJoin": true,
        "basename": "/html5client",
        "branding": {
            "displayBrandingArea": true
        },
        "helpLink": "https://bigbluebutton.org/html5/",
        "wakeLock": {
            "enabled": true
        },
        "breakouts": {
            "breakoutRoomLimit": 2,
            "recordRoomByDefault": false,
            "captureWhiteboardByDefault": false,
            "offerRecordingForBreakouts": false,
            "captureSharedNotesByDefault": false,
            "allowUserChooseRoomByDefault": false,
            "allowPresentationManagementInBreakouts": true,
            "sendInvitationToAssignedModeratorsByDefault": false
        },
        "copyright": "©2025 Jehat Inc.",
        "darkTheme": {
            "enabled": true
        },
        "emojiRain": {
            "enabled": false,
            "emojiSize": 2,
            "intervalEmojis": 2000,
            "numberOfEmojis": 5
        },
        "shortcuts": {
            "joinAudio": {
                "descId": "joinAudio",
                "accesskey": "J"
            },
            "raiseHand": {
                "descId": "raiseHand",
                "accesskey": "R"
            },
            "leaveAudio": {
                "descId": "leaveAudio",
                "accesskey": "L"
            },
            "toggleMute": {
                "descId": "toggleMute",
                "accesskey": "M"
            },
            "openActions": {
                "descId": "openActions",
                "accesskey": "A"
            },
            "openOptions": {
                "descId": "openOptions",
                "accesskey": "O"
            },
            "openLeaveMenu": {
                "descId": "openLeaveMenu",
                "accesskey": "X"
            },
            "toggleUserList": {
                "descId": "toggleUserList",
                "accesskey": "U"
            },
            "hidePrivateChat": {
                "descId": "hidePrivateChat",
                "accesskey": "H"
            },
            "openDebugWindow": {
                "descId": "openDebugWindow",
                "accesskey": "K"
            },
            "closePrivateChat": {
                "descId": "closePrivateChat",
                "accesskey": "G"
            },
            "togglePublicChat": {
                "descId": "togglePublicChat",
                "accesskey": "P"
            }
        },
        "skipCheck": true,
        "bbbWebBase": "/bigbluebutton",
        "lockOnJoin": true,
        "mutedAlert": {
            "enabled": true,
            "duration": 4000,
            "interval": 200,
            "threshold": -50
        },
        "allowLogout": true,
        "clientTitle": "Jehat",
        "bbbTabletApp": {
            "enabled": true,
            "iosAppStoreUrl": "https://apps.apple.com/us/app/bigbluebutton-tablet/id1641156756",
            "iosAppUrlScheme": "bigbluebutton-tablet"
        },
        "audioCaptions": {
            "mobile": false,
            "enabled": false,
            "language": {
                "locale": "browserLanguage",
                "available": [
                    "ar",
                    "en-US",
                    "es-ES",
                    "fr-FR",
                    "pt-BR"
                ],
                "forceLocale": false,
                "defaultSelectLocale": true
            },
            "provider": "webspeech",
            "alwaysVisible": false
        },
        "customStyleUrl": null,
        "listenOnlyMode": true,
        "mobileFontSize": "16px",
        "showHelpButton": true,
        "allowFullscreen": true,
        "defaultSettings": {
            "audio": {
                "inputDeviceId": "undefined",
                "outputDeviceId": "undefined"
            },
            "dataSaving": {
                "viewScreenshare": true,
                "viewParticipantsWebcams": true
            },
            "application": {
                "wakeLock": true,
                "darkTheme": false,
                "animations": true,
                "pushLayout": false,
                "chatPushAlerts": false,
                "fallbackLocale": "en",
                "overrideLocale": null,
                "selectedLayout": "custom",
                "chatAudioAlerts": false,
                "directLeaveButton": true,
                "paginationEnabled": true,
                "pushToTalkEnabled": true,
                "userJoinPushAlerts": false,
                "raiseHandPushAlerts": true,
                "userJoinAudioAlerts": false,
                "userLeavePushAlerts": false,
                "raiseHandAudioAlerts": true,
                "userLeaveAudioAlerts": false,
                "autoCloseReactionsBar": true,
                "guestWaitingPushAlerts": true,
                "guestWaitingAudioAlerts": true,
                "whiteboardToolbarAutoHide": false,
                "webcamBorderHighlightColor": [
                    0,
                    84,
                    97
                ]
            },
            "transcription": {
                "partialUtterances": true,
                "minUtteranceLength": 1
            }
        },
        "desktopFontSize": "14px",
        "forceListenOnly": false,
        "mirrorOwnWebcam": true,
        "reactionsButton": {
            "enabled": true
        },
        "skipCheckOnJoin": false,
        "viewersInWebcam": 8,
        "bbbServerVersion": "HTML5_FULL_BBB_VERSION",
        "html5ClientBuild": "HTML5_CLIENT_VERSION",
        "showAudioFilters": true,
        "skipMeetingEnded": false,
        "connectionTimeout": 60000,
        "enableDebugWindow": true,
        "preloadNextSlides": 2,
        "dynamicGuestPolicy": true,
        "enableNetworkStats": true,
        "ipv4FallbackDomain": "",
        "effectiveConnection": [
            "critical",
            "danger",
            "warning"
        ],
        "userSettingsStorage": "local",
        "enableApolloDevTools": false,
        "allowDefaultLogoutUrl": true,
        "audioChatNotification": false,
        "enableCameraAsContent": true,
        "enableMultipleCameras": true,
        "learningDashboardBase": "/learning-analytics-dashboard",
        "enableCameraBrightness": true,
        "enableTalkingIndicator": true,
        "maxMutationPayloadSize": 10485760,
        "remainingTimeThreshold": 30,
        "alwaysShowWaitingRoomUI": true,
        "displayBbbServerVersion": true,
        "enableGuestLobbyMessage": true,
        "showAllAvailableLocales": true,
        "disableWebsocketFallback": true,
        "askForConfirmationOnLeave": true,
        "enableWebcamSelectorButton": true,
        "delayForUnmountOfSharedNote": 120000,
        "fallbackOnEmptyLocaleString": true,
        "terminateAndRetryConnection": 30000,
        "enableCopyNetworkStatsButton": true,
        "enableLimitOfViewersInWebcam": false,
        "guestPolicyExtraAllowOptions": false,
        "skipEchoTestIfPreviousDevice": false,
        "remainingTimeAlertThresholdArray": [
            1,
            5
        ],
        "enableDynamicAudioDeviceSelection": true,
        "timeoutBeforeRedirectOnMeetingEnd": 20000,
        "warnAboutUnsavedContentOnMeetingEnd": false
    },
    "chat": {
        "enabled": true,
        "toolbar": [
            "reply",
            "delete",
            "edit",
            "reactions"
        ],
        "public_id": "public",
        "emojiPicker": {
            "enable": false
        },
        "startClosed": false,
        "storage_key": "UNREAD_CHATS",
        "type_public": "PUBLIC_ACCESS",
        "type_system": "SYSTEM_MESSAGE",
        "itemsPerPage": 100,
        "type_private": "PRIVATE_ACCESS",
        "disableEmojis": [],
        "public_userid": "public_chat_userid",
        "system_userid": "SYSTEM_MESSAGE",
        "allowedElements": [
            "a",
            "code",
            "em",
            "h1",
            "h2",
            "h3",
            "h4",
            "h5",
            "h6",
            "li",
            "ol",
            "ul",
            "p",
            "strong"
        ],
        "public_group_id": "MAIN-PUBLIC-GROUP-CHAT",
        "public_username": "public_chat_username",
        "system_username": "SYSTEM_MESSAGE",
        "typingIndicator": {
            "enabled": true,
            "showNames": true
        },
        "autoConvertEmoji": true,
        "timeBetweenFetchs": 1000,
        "max_message_length": 5000,
        "min_message_length": 1,
        "bufferChatInsertsMs": 0,
        "system_messages_keys": {
            "chat_clear": "PUBLIC_CHAT_CLEAR",
            "chat_poll_result": "PUBLIC_CHAT_POLL_RESULT",
            "chat_status_message": "PUBLIC_CHAT_STATUS",
            "chat_exported_presentation": "PUBLIC_CHAT_EXPORTED_PRESENTATION"
        },
        "moderatorChatEmphasized": true,
        "grouping_messages_window": 10000,
        "privateMessageReadFeedback": {
            "enabled": false
        },
        "enableSaveAndCopyPublicChat": true,
        "announcePresenterChangeInChat": true
    },
    "pads": {
        "url": "https://demo.osbash.com/pad"
    },
    "poll": {
        "quiz": {
            "enabled": false,
            "quickPollCorrectAnswerSuffix": "__"
        },
        "enabled": true,
        "maxCustom": 5,
        "chatMessage": true,
        "maxTypedAnswerLength": 45,
        "allowCustomResponseInput": true,
        "quickPollConfirmationStep": true
    },
    "user": {
        "label": {
            "guest": true,
            "mobile": true,
            "moderator": false,
            "sharingWebcam": true
        },
        "role_viewer": "VIEWER",
        "role_moderator": "MODERATOR"
    },
    "media": {
        "audio": {
            "retryThroughRelay": false,
            "allowAudioJoinCancel": true,
            "defaultFullAudioBridge": "fullaudio",
            "defaultListenOnlyBridge": "fullaudio"
        },
        "livekit": {
            "audio": {
                "publishOptions": {
                    "dtx": false,
                    "red": true,
                    "audioPreset": {
                        "priority": "high",
                        "maxBitrate": 48000,
                        "networkPriority": "high"
                    },
                    "forceStereo": false
                },
                "unpublishOnMute": true
            },
            "camera": {
                "publishOptions": {
                    "videoCodec": "vp8"
                }
            },
            "logLevel": 3,
            "roomOptions": {
                "dynacast": true,
                "adaptiveStream": true,
                "stopLocalTrackOnUnpublish": false
            },
            "screenshare": {
                "publishOptions": {
                    "videoCodec": "vp8"
                }
            },
            "selectiveSubscription": true
        },
        "mediaTag": "#remote-media",
        "traceSip": false,
        "forceRelay": false,
        "sip_ws_host": "",
        "sdpSemantics": "unified-plan",
        "localEchoTest": {
            "delay": {
                "enabled": true,
                "delayTime": 0.5,
                "maxDelayTime": 2
            },
            "enabled": true,
            "initialHearingState": true,
            "useRtcLoopbackInChromium": true
        },
        "echoTestNumber": "echo",
        "sipjsAllowMdns": false,
        "sipjsHackViaWs": true,
        "callHangupTimeout": 2000,
        "fullAudioOffering": true,
        "fallbackStunServer": "",
        "listenOnlyOffering": false,
        "callTransferTimeout": 5000,
        "forceRelayOnFirefox": true,
        "iceGatheringTimeout": 5000,
        "cacheStunTurnServers": true,
        "listenOnlyCallTimeout": 15000,
        "transparentListenOnly": true,
        "audioConnectionTimeout": 5000,
        "audioReconnectionDelay": 5000,
        "toggleMuteThrottleTime": 300,
        "muteAudioOutputWhenAway": false,
        "callHangupMaximumRetries": 10,
        "audioReconnectionAttempts": 3,
        "skipInitialCamEnumeration": false,
        "websocketKeepAliveDebounce": 10,
        "websocketKeepAliveInterval": 30,
        "stunTurnServersFetchAddress": "/bigbluebutton/api/stuns",
        "screenshareTroubleshootingLinks": {
            "1136": "https://support.bigbluebutton.org/hc/en-us/articles/1500005316582-Share-my-screen#:~:text=Error%201136%3A%20Permission%20to%20capture,able%20to%20screen%20share%20again"
        }
    },
    "notes": {
        "id": "notes",
        "enabled": true,
        "pinnable": true
    },
    "stats": {
        "log": true,
        "rtt": {
            "danger": 1000,
            "warning": 500,
            "critical": 2000
        },
        "help": "STATS_HELP_URL",
        "loss": {
            "danger": 0.1,
            "warning": 0.05,
            "critical": 0.2
        },
        "enabled": true,
        "timeout": 10000,
        "interval": 10000,
        "notification": {
            "error": true,
            "warning": false
        },
        "lastEntriesCap": 20
    },
    "timer": {
        "time": 5,
        "alarm": true,
        "music": {
            "track1": "RelaxingMusic",
            "track2": "CalmMusic",
            "track3": "aristocratDrums",
            "volume": 0.4,
            "enabled": false
        },
        "enabled": true,
        "interval": {
            "clock": 100,
            "offset": 60000
        },
        "tabIndicator": false
    },
    "layout": {
        "showPushLayoutButton": true,
        "showPushLayoutToggle": true,
        "hidePresentationOnJoin": false,
        "showParticipantsOnLogin": true,
        "showSessionDetailsOnJoin": true,
        "showScreenshareQuickSwapButton": false
    },
    "kurento": {
        "wsUrl": "wss://demo.osbash.com/bbb-webrtc-sfu",
        "traceLogs": false,
        "gUMTimeout": 20000,
        "pagination": {
            "mobileGridSizes": {
                "viewer": 14,
                "moderator": 14
            },
            "mobilePageSizes": {
                "viewer": 2,
                "moderator": 2
            },
            "desktopGridSizes": {
                "viewer": 48,
                "moderator": 48
            },
            "desktopPageSizes": {
                "viewer": 5,
                "moderator": 0
            },
            "pageChangeDebounceTime": 1000,
            "paginationToggleEnabled": true
        },
        "restartIce": {
            "audio": {
                "enabled": false,
                "retries": 1
            },
            "video": {
                "enabled": false,
                "retries": 3
            },
            "screenshare": {
                "enabled": false,
                "retries": 3
            }
        },
        "enableVideo": true,
        "screenshare": {
            "bitrate": 1500,
            "constraints": {
                "audio": true,
                "video": {
                    "width": {
                        "max": 2560
                    },
                    "height": {
                        "max": 1600
                    },
                    "frameRate": {
                        "max": 10,
                        "ideal": 5
                    }
                }
            },
            "mediaTimeouts": {
                "maxTimeout": 25000,
                "baseTimeout": 20000,
                "maxConnectionAttempts": 2,
                "timeoutIncreaseFactor": 1.5,
                "baseReconnectionTimeout": 8000
            },
            "subscriberOffering": false,
            "enableVolumeControl": true,
            "showButtonForNonPresenters": false
        },
        "cameraProfiles": [
            {
                "id": "low-u30",
                "name": "low-u30",
                "hidden": true,
                "bitrate": 30
            },
            {
                "id": "low-u25",
                "name": "low-u25",
                "hidden": true,
                "bitrate": 40
            },
            {
                "id": "low-u20",
                "name": "low-u20",
                "hidden": true,
                "bitrate": 50
            },
            {
                "id": "low-u15",
                "name": "low-u15",
                "hidden": true,
                "bitrate": 70
            },
            {
                "id": "low-u12",
                "name": "low-u12",
                "hidden": true,
                "bitrate": 90
            },
            {
                "id": "low-u8",
                "name": "low-u8",
                "hidden": true,
                "bitrate": 100
            },
            {
                "id": "low",
                "name": "Low",
                "bitrate": 100,
                "default": false
            },
            {
                "id": "medium",
                "name": "Medium",
                "bitrate": 200,
                "default": true
            },
            {
                "id": "high",
                "name": "High",
                "bitrate": 500,
                "default": false,
                "constraints": {
                    "width": 1280,
                    "height": 720,
                    "frameRate": 15
                }
            },
            {
                "id": "hd",
                "name": "High definition",
                "bitrate": 800,
                "default": false,
                "constraints": {
                    "width": 1280,
                    "height": 720,
                    "frameRate": 30
                }
            },
            {
                "id": "fhd",
                "name": "Camera as content",
                "hidden": true,
                "bitrate": 1500,
                "default": false,
                "constraints": {
                    "width": 1920,
                    "height": 1080
                }
            }
        ],
        "cameraTimeouts": {
            "maxTimeout": 60000,
            "baseTimeout": 30000
        },
        "enableVideoPin": true,
        "autoShareWebcam": false,
        "cameraWsOptions": {
            "debug": false,
            "heartbeat": {
                "delay": 3000,
                "interval": 15000,
                "reconnectOnFailure": true
            },
            "maxRetries": 7,
            "wsConnectionTimeout": 4000
        },
        "enableVideoMenu": true,
        "signalCandidates": false,
        "skipVideoPreview": false,
        "cameraSortingModes": {
            "defaultSorting": "LOCAL_ALPHABETICAL",
            "paginationSorting": "VOICE_ACTIVITY_LOCAL"
        },
        "enableScreensharing": true,
        "paginationThresholds": {
            "enabled": false,
            "thresholds": [
                {
                    "users": 30,
                    "desktopPageSizes": {
                        "viewer": 25,
                        "moderator": 25
                    }
                },
                {
                    "users": 40,
                    "desktopPageSizes": {
                        "viewer": 20,
                        "moderator": 20
                    }
                },
                {
                    "users": 50,
                    "desktopPageSizes": {
                        "viewer": 16,
                        "moderator": 16
                    }
                },
                {
                    "users": 60,
                    "desktopPageSizes": {
                        "viewer": 12,
                        "moderator": 14
                    }
                },
                {
                    "users": 70,
                    "desktopPageSizes": {
                        "viewer": 10,
                        "moderator": 12
                    }
                },
                {
                    "users": 80,
                    "desktopPageSizes": {
                        "viewer": 8,
                        "moderator": 10
                    }
                },
                {
                    "users": 90,
                    "desktopPageSizes": {
                        "viewer": 6,
                        "moderator": 8
                    }
                },
                {
                    "users": 100,
                    "desktopPageSizes": {
                        "viewer": 4,
                        "moderator": 6
                    }
                }
            ]
        },
        "cameraQualityThresholds": {
            "enabled": true,
            "thresholds": [
                {
                    "profile": "low-u8",
                    "threshold": 8
                },
                {
                    "profile": "low-u12",
                    "threshold": 12
                },
                {
                    "profile": "low-u15",
                    "threshold": 15
                },
                {
                    "profile": "low-u20",
                    "threshold": 20
                },
                {
                    "profile": "low-u25",
                    "threshold": 25
                },
                {
                    "profile": "low-u30",
                    "threshold": 30
                }
            ],
            "debounceTime": 2500,
            "applyConstraints": false,
            "privilegedStreams": true
        },
        "skipVideoPreviewOnFirstJoin": false,
        "skipVideoPreviewIfPreviousDevice": false
    },
    "plugins": [],
    "captions": {
        "id": "captions",
        "font": {
            "size": "24px",
            "color": "#ffffff",
            "family": "Calibri"
        },
        "time": 5000,
        "lines": 2,
        "enabled": true,
        "locales": [
            {
                "name": "Afrikaans",
                "locale": "af"
            },
            {
                "name": "العربية",
                "locale": "ar"
            },
            {
                "name": "Azərbaycan dili",
                "locale": "az"
            },
            {
                "name": "Български",
                "locale": "bg-BG"
            },
            {
                "name": "বাংলা",
                "locale": "bn"
            },
            {
                "name": "Català",
                "locale": "ca"
            },
            {
                "name": "Čeština",
                "locale": "cs-CZ"
            },
            {
                "name": "Dansk",
                "locale": "da"
            },
            {
                "name": "Deutsch",
                "locale": "de"
            },
            {
                "name": "ދިވެހި",
                "locale": "dv"
            },
            {
                "name": "Ελληνικά",
                "locale": "el-GR"
            },
            {
                "name": "English",
                "locale": "en"
            },
            {
                "name": "English",
                "locale": "en-US"
            },
            {
                "name": "Esperanto",
                "locale": "eo"
            },
            {
                "name": "Español",
                "locale": "es"
            },
            {
                "name": "Español (Latinoamérica)",
                "locale": "es-419"
            },
            {
                "name": "Español (España)",
                "locale": "es-ES"
            },
            {
                "name": "Español (México)",
                "locale": "es-MX"
            },
            {
                "name": "eesti keel",
                "locale": "et"
            },
            {
                "name": "Euskara",
                "locale": "eu"
            },
            {
                "name": "فارسی",
                "locale": "fa-IR"
            },
            {
                "name": "Suomi",
                "locale": "fi"
            },
            {
                "name": "Français",
                "locale": "fr"
            },
            {
                "name": "Galego",
                "locale": "gl"
            },
            {
                "name": "עברית‏",
                "locale": "he"
            },
            {
                "name": "हिन्दी",
                "locale": "hi-IN"
            },
            {
                "name": "Hrvatski",
                "locale": "hr"
            },
            {
                "name": "Magyar",
                "locale": "hu-HU"
            },
            {
                "name": "Հայերեն",
                "locale": "hy"
            },
            {
                "name": "Bahasa Indonesia",
                "locale": "id"
            },
            {
                "name": "Italiano",
                "locale": "it-IT"
            },
            {
                "name": "日本語",
                "locale": "ja"
            },
            {
                "name": "ქართული",
                "locale": "ka"
            },
            {
                "name": "ភាសាខ្មែរ",
                "locale": "km"
            },
            {
                "name": "ಕನ್ನಡ",
                "locale": "kn"
            },
            {
                "name": "한국어 (韩国)",
                "locale": "ko-KR"
            },
            {
                "name": "ລາວ",
                "locale": "lo-LA"
            },
            {
                "name": "Lietuvių",
                "locale": "lt-LT"
            },
            {
                "name": "Latviešu",
                "locale": "lv"
            },
            {
                "name": "മലയാളം",
                "locale": "ml"
            },
            {
                "name": "Монгол",
                "locale": "mn-MN"
            },
            {
                "name": "Norsk (bokmål)",
                "locale": "nb-NO"
            },
            {
                "name": "Nederlands",
                "locale": "nl"
            },
            {
                "name": "Occitan",
                "locale": "oc"
            },
            {
                "name": "Polski",
                "locale": "pl-PL"
            },
            {
                "name": "Português",
                "locale": "pt"
            },
            {
                "name": "Português (Brasil)",
                "locale": "pt-BR"
            },
            {
                "name": "Română",
                "locale": "ro-RO"
            },
            {
                "name": "Русский",
                "locale": "ru"
            },
            {
                "name": "Slovenčina (Slovakia)",
                "locale": "sk-SK"
            },
            {
                "name": "Slovenščina",
                "locale": "sl"
            },
            {
                "name": "Српски",
                "locale": "sr"
            },
            {
                "name": "Svenska",
                "locale": "sv-SE"
            },
            {
                "name": "தமிழ்",
                "locale": "ta"
            },
            {
                "name": "తెలుగు",
                "locale": "te"
            },
            {
                "name": "ภาษาไทย",
                "locale": "th"
            },
            {
                "name": "Türkçe",
                "locale": "tr-TR"
            },
            {
                "name": "Українська",
                "locale": "uk-UA"
            },
            {
                "name": "Tiếng Việt",
                "locale": "vi-VN"
            },
            {
                "name": "中文（中国",
                "locale": "zh-CN"
            },
            {
                "name": "中文（台灣",
                "locale": "zh-TW"
            }
        ],
        "dictation": false,
        "lineLimit": 60,
        "background": "#000000",
        "defaultPad": "en",
        "showButton": false,
        "captionLimit": 3
    },
    "clientLog": {
        "console": {
            "level": "debug",
            "enabled": true
        },
        "external": {
            "url": "https://LOG_HOST/html5Log",
            "level": "info",
            "logTag": "",
            "method": "POST",
            "enabled": false,
            "flushOnClose": true,
            "throttleInterval": 400
        }
    },
    "whiteboard": {
        "styles": {
            "text": {
                "family": "script"
            },
            "dashStyle": "draw",
            "fillStyle": "none",
            "fontStyle": "draw",
            "sizeStyle": "m",
            "colorStyle": "black"
        },
        "locales": [
            "ar",
            "ca",
            "cs",
            "da",
            "de",
            "en",
            "es",
            "fa",
            "fi",
            "fr",
            "gl",
            "he",
            "hi-in",
            "hu",
            "it",
            "ja",
            "ko-kr",
            "ku",
            "main",
            "my",
            "ne",
            "no",
            "pl",
            "pt-br",
            "pt-pt",
            "ro",
            "ru",
            "sv",
            "te",
            "th",
            "tr",
            "uk",
            "vi",
            "zh-cn",
            "zh-tw"
        ],
        "toolbar": {
            "multiUserTools": [
                "select",
                "hand",
                "draw",
                "eraser",
                "arrow",
                "text",
                "note",
                "rectangle",
                "delete-selected-items",
                "highlight",
                "more",
                "actions",
                "ellipse",
                "diamond",
                "triangle",
                "trapezoid",
                "rhombus",
                "hexagon",
                "cloud",
                "star",
                "oval",
                "x-box",
                "check-box",
                "arrow-left",
                "arrow-up",
                "arrow-down",
                "arrow-right",
                "line",
                "frame"
            ],
            "presenterTools": [
                "select",
                "hand",
                "draw",
                "eraser",
                "arrow",
                "text",
                "note",
                "rectangle",
                "delete-selected-items",
                "highlight",
                "more",
                "actions",
                "ellipse",
                "diamond",
                "triangle",
                "trapezoid",
                "rhombus",
                "hexagon",
                "cloud",
                "star",
                "oval",
                "x-box",
                "check-box",
                "arrow-left",
                "arrow-up",
                "arrow-down",
                "arrow-right",
                "line",
                "frame"
            ],
            "multiUserPenOnly": false,
            "initialSelectedTool": "draw"
        },
        "annotations": {
            "status": {
                "end": "DRAW_END",
                "start": "DRAW_START",
                "update": "DRAW_UPDATE"
            }
        },
        "cursorInterval": 150,
        "pointerDiameter": 5,
        "lockToolbarTools": false,
        "maxStickyNoteLength": 1000,
        "maxNumberOfActiveUsers": 25,
        "maxNumberOfAnnotations": 300,
        "allowInfiniteWhiteboard": false,
        "annotationsQueueProcessInterval": 60,
        "allowInfiniteWhiteboardInBreakouts": false
    },
    "presentation": {
        "uploadEndpoint": "/bigbluebutton/presentation/upload",
        "panZoomThrottle": 32,
        "restoreOnUpdate": true,
        "mirroredFromBBBCore": {
            "uploadSizeMax": 30000000,
            "uploadPagesMax": 200
        },
        "uploadValidMimeTypes": [
            {
                "mime": "application/pdf",
                "extension": ".pdf"
            },
            {
                "mime": "application/msword",
                "extension": ".doc"
            },
            {
                "mime": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                "extension": ".docx"
            },
            {
                "mime": "application/vnd.ms-excel",
                "extension": ".xls"
            },
            {
                "mime": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                "extension": ".xlsx"
            },
            {
                "mime": "application/vnd.ms-powerpoint",
                "extension": ".ppt"
            },
            {
                "mime": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                "extension": ".pptx"
            },
            {
                "mime": "text/plain",
                "extension": ".txt"
            },
            {
                "mime": "application/rtf",
                "extension": ".rtf"
            },
            {
                "mime": "application/vnd.oasis.opendocument.text",
                "extension": ".odt"
            },
            {
                "mime": "application/vnd.oasis.opendocument.spreadsheet",
                "extension": ".ods"
            },
            {
                "mime": "application/vnd.oasis.opendocument.presentation",
                "extension": ".odp"
            },
            {
                "mime": "application/vnd.oasis.opendocument.graphics",
                "extension": ".odg"
            },
            {
                "mime": "image/jpeg",
                "extension": ".jpg"
            },
            {
                "mime": "image/jpeg",
                "extension": ".jpeg"
            },
            {
                "mime": "image/png",
                "extension": ".png"
            },
            {
                "mime": "image/webp",
                "extension": ".webp"
            },
            {
                "mime": "image/svg+xml",
                "extension": ".svg"
            }
        ],
        "allowDownloadOriginal": true,
        "fileUploadConstraintsHint": false,
        "allowSnapshotOfCurrentSlide": true,
        "allowDownloadWithAnnotations": true
    },
    "userReaction": {
        "expire": 30,
        "enabled": true,
        "reactions": [
            {
                "id": "smiley",
                "native": "😃"
            },
            {
                "id": "neutral_face",
                "native": "😐"
            },
            {
                "id": "slightly_frowning_face",
                "native": "🙁"
            },
            {
                "id": "-1",
                "native": "👎"
            },
            {
                "id": "+1",
                "native": "👍"
            },
            {
                "id": "clap",
                "native": "👏"
            }
        ]
    },
    "minBrowserVersions": {
        "edge": ">=85",
        "miui": "<0",
        "chrome": ">=87",
        "mobile": {
            "chrome": ">=87",
            "safari": ">=14"
        },
        "safari": ">=14",
        "firefox": ">=80"
    },
    "virtualBackgrounds": {
        "enabled": true,
        "fileNames": [
            "home.jpg",
            "coffeeshop.jpg",
            "board.jpg"
        ],
        "imagesPath": "/resources/images/virtual-backgrounds/",
        "storedOnBBB": true,
        "showThumbnails": true,
        "thumbnailsPath": "/resources/images/virtual-backgrounds/thumbnails/",
        "enableVirtualBackgroundUpload": true
    },
    "externalVideoPlayer": {
        "enabled": true
    },
    "syncUsersWithConnectionManager": {
        "enabled": false,
        "syncInterval": 60000
    }
}