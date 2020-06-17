var fileUploadSetting = {
	image: {
		// image file format
    	accept: ['image/png', 'image/jpeg', 'image/gif'],
    	// max image file size (MB)
    	limitSize: 10,
    	// max height and width of thumbnail (px)
    	thumbnailSize: 1500
  	},
  	video: {
    	// video file format
	    accept: ['video/mp4', 'video/quicktime'],
	    // max video file size (MB)
	    limitSize: 100,
	    // max height and width of thumbnail (px)
	    thumbnailSize: 1500
  	},
  	other: {
    	// other file format
	    accept: ['application/pdf', 'audio/mp3', 'audio/x-m4a'],
	    // max file size (MB)
	    limitSize: 10
  	}
};

var config = {

// debug mode
debug: false,

	// Chat Servrer Settings
		// Please create your chat server from 'https://dashboard.imkit.io/' and get your own configurations
		// Please refer to 'https://github.com/FUNTEKco/chat-server-document/wiki#client-auth-flow' for auth flow

		// chat server url
		domain: 'https://sample.imkit.io',
		// chat server clientkey 
		clientKey: 'ClientkeySample1234',
		// client id
		authClientId: '',
		// chat user token
		token: '',

	// Application Settings
		// You can display your app logo and app name on the top of room list (refer to https://i.imgur.com/nlnxe6p.png)
		// App logo will be on the left, and app name will be on the right
	  
		// app logo url
	  	appLogo: 'https://i.imgur.com/gchEcBi.png',
	  	// app name
	  	appName: '',
	  	// langauge setting 'zh-tw', 'en', 'ja', 'auto' ('auto' means depending on browser)
	  	lang: 'auto',

	// Chat Layout SettingS
		
		layout: {
	    	// display room list in the left side (https://i.imgur.com/4E5DK8U.png)
			list: true,
			// display room detail in the right side (https://i.imgur.com/k12UstU.png)
			info: true
		},

	// 3rd Party Service Settings
		// Please don't change config below unless you have your own service

			// url parser api (refer to https://i.imgur.com/VRNyC1k.png)
			urlPreviewApi: 'https://url.imkit.io/',
	  		// google api key 
			googleApiKey: 'AIzaSyBECFunCq-6PruaLbHPLYW-XNDZC7YO6Lo',
			// S3 bucketName
			bucketName: 'chatserver-upload',

},

    // Default Room Settings
    	// open default chat room as entering chat service
    	// 'true': open chat room with room id of defaultRoom
    	// 'false': open the first chat room in room list

        // enter default room
  		autoEnterRoom: false,
		// enter default room (on mobile)
		autoEnterRoomMobile: false,
		// default room id as accessing to chat 
		defaultRoom: null,

	// Room List Settings (refer to https://i.imgur.com/4E5DK8U.png)
	  	list: {
		    // sorting of room list. 
		    // option: 'null' or 'createdTime'
		    sort: null,
			// number of loaded rooms as openning room list  
		    numberOfRoomsForFirstLoad: 60,
		    // set room list color
		    // color fomat: '#123456' or 'rgba(12, 34, 56, 0.5)'
		    colors: {
		    	// header color
		    	header: {
		        	// background color
			        background: null,
			        // text color
			        color: null
		      		}
		    	},
			    // display count of members in the room
			    memberCount: true,
			    // logout button (refer to https://i.imgur.com/n1UpOrd.png)
			    logout: {
			    	// display logout button
			    	enable: true,
			    	// event as clicking logout button (default: remove user token)
		      		event: function() {
		        		localStorage.removeItem('IMKit-token');
		    			}
		    		},
		    
		    // Room Managemt Tools
			    // display option of sticking room on the top of room list (refer to https://i.imgur.com/ISPFrRr.png)
			    sticky: true,
			    // display option of hidding room from room list (refer to https://i.imgur.com/lTNXgk4.png)
			    hidden: true,
			    // display option of creating folder (refer to https://i.imgur.com/LHL3aYm.png)
			    folder: true,
			    // display option of adding room tag (refer to https://i.imgur.com/0oxd181.png)
			    tags: true,
			    // display button of creating a new chat room (refer to https://i.imgur.com/XiUqCyZ.png)
			    createRoom: true
	  		},

	// Chat Block Setting (refer to https://i.imgur.com/TcrBvtB.png)
		chat: {
    		// Typing 位置，0: 在輸入框上面, 1: 在輸入框裡面
    		modeTyping: 0,
    		// display header of chat block (refer to https://i.imgur.com/EWcnlJX.png)
    		showHeader: true,
		    // drag and drop to upload files (refer to https://i.imgur.com/X90Jeb0.png)
		    dragdropUpload: {
		    	// enable drag and drop
		      	enable: true,
      			// file upload settings of drag and drop
				extra: {
					// file format
					accept: fileUploadSetting.other.accept.concat(
					fileUploadSetting.image.accept,
					fileUploadSetting.video.accept
					),
	        		// image upload settings of drag and drop
	        		image: {
						// max image file size (MB)
						limitSize: fileUploadSetting.image.limitSize,
						// max height and width of thumbnail (px)
		            	thumbnailSize: fileUploadSetting.image.thumbnailSize
        			},
	       			// video upload settings of drag and drop
	       			video: {
						// max video file size (MB)
						limitSize: fileUploadSetting.video.limitSize,
						// max height and width of thumbnail (px)
						thumbnailSize: fileUploadSetting.video.thumbnailSize
					},
	        		// other file upload settings of drag and drop
	        		other: {
					// max file size (MB)
	          		limitSize: fileUploadSetting.other.limitSize
	        		}
      			}	
    		},

    		// max length of text in input area (refer to https://i.imgur.com/MR0Zjqb.png)
    		limitTextLength: Number.MAX_SAFE_INTEGER,
    		// options of closing image and video preview (refer to https://i.imgur.com/xLpgALx.png)
    		// 'close'：upper right X to close the preview
    		// 'back'：upper left arrow to back to chat
    		sliderReturnMode: 'close',
    		// 爬 url meta 時，是否使用異步讀取
    		asyncUrlPreview: true,
    		// max width of thumbnail (px)
    		thumbnailSize: 500,
    		// display read receipt
    		readReceipt: true,
    		// enable message reply 
    		reply: true,
    		// enable message forward 
    		forward: true,
    		// enable message recall
		    recall: true,
    		// enable audio download
    		audioDownload: true,

    		// Chat Block Color Settings
    			// color format:'#123456' 或 'rgba(12, 34, 56, 0.5)'
			    colors: {
			    	// header color
			    	header: {
			        // background color
			        background: null,
			        // text color
			        color: null
			    	},
				    // messages sent by user (https://i.imgur.com/dLZwjoA.png)
				    self: {
				        // background color
				        background: null,
				        // text color
				        color: null,
				        // border color
				        borderColor: null
				      	},
			      	// messages sent by others (refer to https://i.imgur.com/26eDJOn.png)
			    	others: {
				        // background color
				        background: null,
				        // text color
				        color: null,
				        // border color
				        borderColor: null
				      	},
			    	// system message
			      	system: {
				        // background color 
				        background: null,
				        // text color
				        color: null,
				        // border color
				        borderColor: null
			      		}
			    	},

			// Sticker Settings
				// You can add your own stickers (refer to https://github.com/imkit/imkit-web-sdk/blob/master/docs/en/STICKER.md)
				// You need to add config as below

    			sticker: [
	      			{
				        folder: 'FunFunFamily',
				        icon: 'FunFunFamily-1',
				        count: 40
	      			},
	      			{
	        			folder: 'emoji',
	        			icon: 'emoji-1',
	        			count: 45
	      			},
	      			{
				        folder: 'animal',
				        icon: 'animal-1',
				        count: 16
	      			},
				    {
				        folder: 'food',
				        icon: 'food-1',
				        count: 16
				    },
				    {
				        folder: 'natural',
				        icon: 'natural-1',
				        count: 32
				    },
				    {
				        folder: 'people',
				        icon: 'people-1',
				        count: 16
				    },
				    {
				        folder: 'sport',
				        icon: 'sport-1',
				        count: 16
				    },
				    {
				        folder: 'money',
				        icon: 'money-1',
				        count: 15
				    }
    			]
    // Chat Tool Setting (refer to https://i.imgur.com/Wrwe4yl.png)

    	// position of chat tool 'bottom' or 'right'
	    // 'bottom': https://i.imgur.com/MQl52lj.png
	    // 'right': https://i.imgur.com/Ralk4d2.png
    	actionsPosition: {
		    pc: 'bottom',
		    pad: 'right',
		    mobile: 'right'
	    	},

    // Chat tool display settings (refer to https://i.imgur.com/Wrwe4yl.png)
    	actions: [
		{
        	// send sticker (refer to https://i.imgur.com/aIlFhWR.png)
	        type: 'sticker',
	        // enable 'send sticker' on different devices
	        pcEnable: true,
	        padEnable: false,
	        mobileEnable: false,
	        // 描述文字 -> 應該放到 i18n 中
	        text: 'Send Sticker'
      	},
        {
        	// send emoji (refer to https://i.imgur.com/jgJe4mV.png)
	        type: 'emoji',
	        // enable 'send emoji' on different devices
	        pcEnable: true,
	        padEnable: false,
	        mobileEnable: false,
	        // 描述文字 -> 應該放到 i18n 中
	        text: 'Send Emoji'
      	},
        {
        	// send image (refer to https://i.imgur.com/4Dn9P9k.png)
	        type: 'image',
	        // enable 'send image' on different devices
	        pcEnable: true,
	        padEnable: false,
	        mobileEnable: false,
	        // 描述文字 -> 應該放到 i18n 中
	        text: 'Send Image',
	        // file upload settings of 'send image'
	        extra: {
				// image file format
          		accept: fileUploadSetting.image.accept,
            	image: {
	            // max image file size (MB)
	            limitSize: fileUploadSetting.image.limitSize,
	            // max height and width of thumbnail (px)
	            thumbnailSize: fileUploadSetting.image.thumbnailSize
            	}
        	}
    	},
    	{
	        // send video (refer to https://i.imgur.com/aydYUQa.png)
	        type: 'video',
	        // enable 'send video' on different devices
	        pcEnable: true,
	        padEnable: false,
	        mobileEnable: false,
	        // 描述文字 -> 應該放到 i18n 中
	        text: 'Send Video',
	        // file upload settings of 'send video'
	        extra: {
	        	// video file format
	        	accept: fileUploadSetting.video.accept,
	        	video: {
	        		// max video file size (MB)
		            limitSize: fileUploadSetting.video.limitSize,
		            // max height and width of thumbnail (px)
		            thumbnailSize: fileUploadSetting.video.thumbnailSize
	      	  	}
	        }
	    },
      	{
        	// send file (refer to https://i.imgur.com/pwHSgGm.png)
	        type: 'file',
	        // enable 'send file' on different devices
	        pcEnable: true,
	        padEnable: true,
	        mobileEnable: true,
	        // 描述文字 -> 應該放到 i18n 中
	        text: 'Send File',
	        // file upload settings of 'send file'
	        extra: {
	        	// file format
	        	accept: fileUploadSetting.other.accept.concat(
	            fileUploadSetting.image.accept,
	            fileUploadSetting.video.accept
          		),
          		// image upload settings of 'send file'
          		image: {
		            // max image file size (MB)
		            limitSize: fileUploadSetting.image.limitSize,
		            // max height and width of thumbnail (px)
		            thumbnailSize: fileUploadSetting.image.thumbnailSize
	         	},
          		// video upload settings of 'send file'
          		video: {
	            	// max video file size (MB)
		            limitSize: fileUploadSetting.video.limitSize,
		            // max height and width of thumbnail (px)
		            thumbnailSize: fileUploadSetting.video.thumbnailSize
	          	},
          		// other file upload settings of 'send file'
          		other: {
		            // max file size (MB)
		            limitSize: fileUploadSetting.other.limitSize
          		}
        	}
      	},
      	{
       		// send recording (refer to https://i.imgur.com/lp0yJ4f.png)
	        type: 'recorder',
	        // enable 'send recording' on different devices
	        pcEnable: true,
	        padEnable: false,
	        mobileEnable: false,
	        // 描述文字 -> 應該放到 i18n 中
	        text: 'Send Recorder',
	        // file upload settings of 'send recording'
	        extra: {
        		// max time of recording (seconds)
          		limitSeconds: 60
        	}
      	},
      	{
	        // send location (refer to https://i.imgur.com/2boHak8.png)
	        type: 'location',
	        // enable 'send location' on different devices
	        pcEnable: true,
	        padEnable: false,
	        mobileEnable: false,
	        // 描述文字 -> 應該放到 i18n 中
	        text: 'Send Location'
      	},
     
      	{
        	// button of 'more chat tool'(refer to https://i.imgur.com/5OTnatW.png)
	        type: 'group',
	        // display button of 'more chat tool'
	        pcEnable: false,
	        padEnable: true,
	        mobileEnable: true,
	        // 描述文字 -> 應該放到 i18n 中
	        text: '',
        	actions: [
          		{
	            // send sticker (refer to https://i.imgur.com/uv1tsEX.png)
	            type: 'sticker',
	            // enable 'send sticker' on different devices
	            pcEnable: true,
	            padEnable: true,
	            mobileEnable: true,
	            // 描述文字 -> 應該放到 i18n 中
	            text: 'Send Sticker'
	          	},
	          	{
	            // send image (refer to https://i.imgur.com/ILut763.png)
	            type: 'image',
	            // enable 'send image' on different devices
	            pcEnable: true,
	            padEnable: true,
	            mobileEnable: true,
	            // 描述文字 -> 應該放到 i18n 中
	            text: 'Send Image',
            		// 
            	extra: {
	            	// file upload settings of 'send image'
	            	accept: fileUploadSetting.image.accept,
	            	image: {
		                // max image file size (MB)
		                limitSize: fileUploadSetting.image.limitSize,
		                // max height and width of thumbnail (px)
		                thumbnailSize: fileUploadSetting.image.thumbnailSize
	              		}
	            	}	
	          	},
	            {
	            // send video (refer to https://i.imgur.com/BMj4dwp.png)
	            type: 'video',
	            // enable 'send video' on different devices
	            pcEnable: true,
	            padEnable: true,
	            mobileEnable: true,
	            // 描述文字 -> 應該放到 i18n 中
	            text: 'Send Video',
	            extra: {
	            	// file upload settings of 'send video'
	            	accept: fileUploadSetting.video.accept,
	            	video: {
	                	// max video file size (MB)
	                	limitSize: fileUploadSetting.video.limitSize,
	                // max height and width of thumbnail (px)
	                thumbnailSize: fileUploadSetting.video.thumbnailSize
	              		}
	            	}
	            },
	            {
	            // send recording (refer to https://i.imgur.com/s5Smcpp.png)
	            type: 'recorder',
	            // enable 'send recording' on different devices
	            pcEnable: true,
	            padEnable: true,
	            mobileEnable: true,
	            // 描述文字 -> 應該放到 i18n 中
	            text: 'Send Recorder',
	            // file upload settings of 'send recording'
	            extra: {
                	// max time of recording (seconds)
              		limitSeconds: 60
	            	}
	            },
           		{
	            // send location (refer to https://i.imgur.com/K5TTZdI.png)
	            type: 'location',
	            // enable 'send location' on different devices
	            pcEnable: true,
	            padEnable: true,
	            mobileEnable: true,
	            // 描述文字 -> 應該放到 i18n 中
	            text: 'Send Location'
	        	},
        	]
        }
    ]
},

  	

  	// Room Detail Settings (refer to https://i.imgur.com/L7zQbgj.png)

		info: {
    		// button of chatbot (refer to https://i.imgur.com/qLxhKCB.png)
    		bot: {
      			// enbable chatbot
      			enable: true
    			},
    		// color setting of room detail
    		// color format: '#123456' or 'rgba(12, 34, 56, 0.5)'
    		colors: {
      			// header color (refer to https://i.imgur.com/hnbfuJV.png)
      			header: {
        			// background color
        			background: null,
			        // text color
			        color: null
      				}
    			},
    
    		// room detail editing
    		edit: {
      			// setting of 'room editing' button (refer to https://i.imgur.com/Z24rhVr.png)
      			room: {
        			// enable 'chage group name'
        			name: true,
        			// enable 'change group description'
			        description: true,
			        // enable 'chagne group cover'
			        cover: true
      				},
		        // display 'create a new room' button (refer to https://i.imgur.com/7g6vGyh.png)
		        createRoom: true,
		        // 是否可離開房間 => we don't have UI right now. consider to remove?
		        leave: true,
		        // display 'remove user' button (refer to https://i.imgur.com/ocOJdl4.png)
		        remove: true,
		        // enable 'group invitee' (refer to https://i.imgur.com/o2qDsuZ.png)
		        invite: true,
		        // enable 'search in converstation' (refer to https://i.imgur.com/rv4fLyH.png)
		        hasSearch: true
    			},
		    // open group member list by default (refer to https://i.imgur.com/fCWkgIP.png)
		    openMembersList: false,
		    
		    // iframe settings

		    	// iframe in the bottom right of chat (refer to https://i.imgur.com/0xZPvtH.png)
		    	// insert your customized button or display any inforation related to your service scenario
			    iframes: [
			    	{
			        	// title of iframe
			      		title: 'Test',
			      		// insert url to iframe with room id and client ids
			      		url: '//imkit.io/',
			      		// open iframe by default
			      		open: true,
			      		// height of iframe
			      		height: 300
			      	}
			    ]
  		},

  	// Notification Settings (Receiving Message)

		// mute all notifcation as receiving new message
		alwaysMute: false,
		// change document title as receiving new message (refer to https://i.imgur.com/maM2K70.png)
		changeTitle: true,
		// icon on push notification of browser (refer to https://i.imgur.com/bpv5OCN.png)
		notificationIcon: 'https://imkitdemo.com/static/logo.png',
 

 	// Firebase Cloud Messaging Settings
 		
 		// please visit https://firebase.google.com/docs/cloud-messaging?authuser=0 
 		// you can modify the configs below as yours
 		// if you don't use push notification, you can set it as 'null'
	  	FCMConfig: {
		    apiKey: 'AIzaSyDH6fgpRFaH7vIqAcGQi48wgvNf8BJ9q1I',
		    authDomain: 'fir-chat-server.firebaseapp.com',
		    databaseURL: 'https://fir-chat-server.firebaseio.com',
		    projectId: 'fir-chat-server',
		    storageBucket: 'fir-chat-server.appspot.com',
		    messagingSenderId: '970263218499'
  		
  quickReply: {
    items: []
  }

  // 搜尋時要 filter 的 roomTag
  roomTag: '',
  
  // 建立新房間可設定的資訊
  createRoom: {
    // 是否可設定房間 ID
    id: true,
    // 是否可設定房間名稱
    name: true,
    // 是否可設定房間描述
    description: true,
    // 是否可設定房間圖片
    cover: true
  },


/*
  // private key
  privateKey: '',

   // 取得 avatar 需要的 headers
  avatarHeaders: [
    // {
    //   name: 'token',
    //   // 'variable' or 'stable'
    //   type: 'variable',
    //   // 變數名稱或固定的值
    //   value: 'token'
    // },
    // {
    //   name: 'stableValue',
    //   // 'variable' or 'stable'
    //   type: 'stable',
    //   // 變數名稱或固定的值
    //   value: 'testStable'
    // }
  ],
  // 下載檔案時要帶的 headers
  downloadFileHeaders: [
    // {
    //   name: 'Authorization',
    //   // 'variable' or 'stable'
    //   type: 'variable',
    //   // 變數名稱或固定的值
    //   value: 'token'
    // }
  ],
};

	{
        // Please contact our team if you want to enable this funciton
        // send payment request
        type: 'paymentRequest',
        // enable 'send payment request' on different devices
        pcEnable: false,
        padEnable: false,
        mobileEnable: false,
        // 描述文字
        text: 'Send Payment Request',
        extra: {
          // 支援的幣值
          currencies: ['TWD', 'USD'],
          // 請款 API
          requestApi: '',
          paymentBy: [
            {
              key: 'paypal',
              text: 'PayPal'
            },
            {
              key: 'tappay',
              text: 'TapPay'
            },
            {
              currencies: ['TWD'],
              key: 'newebpay',
              text: '藍新'
            }
          ]
        }
      },
      {
        // 問卷
        type: 'questionare',
        // 是否啟用
        pcEnable: true,
        padEnable: false,
        mobileEnable: false,
        // 描述文字
        text: 'Send Questionare',
        extra: {
          // 狀態代碼
          botState: 'LINGTELLI::'
        }
      },

 // 事件們
  events: {
    // call api 失敗時的處理
    onAjaxError: function(error) {
      if (error.RC === 401) {
        window.top.location.href = 'demo';
      } else {
        console.error(error.RM);
      }
    }
  },

  // room admin 客製化設定
  roomOwner: {
    // room admin ID
    id: '',
    // room admin
    avatarUrl: '',
    // room name
    name: '',
    // room title
    title: ''
    },
