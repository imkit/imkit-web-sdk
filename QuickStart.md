# [IMKIT] Quick Start: Send Your First Message



## Intro

Through IMKIT Web SDK, you will be able to integrate chat into your app easily and efficiently. Follow the simple integration process below to build the chat with feature-rich experience.

## Get started

This tutorial provides you a step-by-step guide to install `IMKIT iOS SDK` to your new project or an existing project you own with minimum efforts. Please check out the details in the complete guide and documents. You can find solutions to related issues you may face during the installations. Let's get started.

### Step 1 - Create a Project or install on existed Project

If you want to create a new project, open the Xcode app (must be v12.5 or later), then create a new project; Otherwise, just install it in your existing project by Xcode.

### Step 2 - Install SDK through CocoaPods

We only support installing IMKIT iOS SDK through Cocoapods.

(If you are not familiar with `CocoaPods`, please check [this](https://cocoapods.org/) for more infomation beforehand)

Open `Podfile` in project, then paste these:

```ruby=
platform :ios, '11.0'
target YOUR_PROJECT_TARGET do  
  use_frameworks!  
  pod 'IMKit', :git => 'https://github.com/imkit/imkit-ios-framework-v3.git'
  pod 'SwiftLinkPreview', :git => 'https://github.com/imkit/SwiftLinkPreview.git'
  
  post_install do |installer|
  installer.pods_project.targets.each do |target|
    target.build_configurations.each do |config|
      config.build_settings['BUILD_LIBRARY_FOR_DISTRIBUTION'] = 'YES'
    end
  end
end
```


Then execute this command in terminal, and make sure you get the latest version of SDK.

```
$ pod install --repo-update
```


### Step 3 - Initialize IMKIT

To integrate and run IMKIT in your app, we recommend you to initialize it in `AppDelegate.swift`, especially in `didFinishLaunchingWithOptions` method.


Before initializing IMKIT, you need to have two things ready.

    1. client key
    2. chat server url    

You can get these private values from our dashboard.

> Dashboard: https://dashboard.imkit.io/
> ![](https://i.imgur.com/Q9J0tqG.png)


(In order to continue this tutorial, please check out our dashboard if you don't have these values.)

>Dashboard intro: https://hackmd.io/B2ARb__GQ2SJeLOxuL8sLg

(Please check out the How to get client key tutorial)

Fill in these values by executing `configure` method of `IMKIT` in `didFinishLaunchingWithOptions` method of `AppDelegate`.

```swift=
//  AppDelegate.swift

import IMKit

class AppDelegate: UIResponder, UIApplicationDelegate {        

    // ...
    
    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {        
        IMKit.configure(
            clientKey: IMKIT_CLIENT_KEY,
            chatServerURL: URL(string: IMKIT_CHAT_SERVER_URL)!
        )
        return true
    }

    // ...
}

```

### Step 4 - Show Chat Room List Scene

We implemented multiple default scenes in IMKIT SDK, and you don't need generate any swift files to show the chat room list and chat room.

Choose a view controller you want to show the chat room list from, and implement the following code to it.

#### 1. Prepare user data
First, we need users to get the chat started. To start, we need two things:
    
    1. userId
    2. username
    
Both are string type, hence we created `currentUserId` & `currentUserNickname` for demo purpose.

(It is also completely fine to use the user data from your app)

We also created another user id (called `otherUserId`) to join the chatroom with the first user.


#### 2. Start Connecting to Chat Server

To connect to chat server with `userId` through `connect` method of IMKIT. Please make `userId` unique, because we need it to identify different users.

```swift=
IMKit.connect(uid: <USER_ID>)
```

As for the access token from IMKIT, it will be stored permanently and the IMKIT iOS SDK will help handle it until you log out from IMKIT.

#### 3. Update User Info

After successfully connecting to IMKIT server with `userId`, try to update your user data including the nickname, avatar, and description, in the IMKIT server through `IMUpdateMyProfileTask` promise-style method.

```swift=
IMUpdateMyProfileTask().perform(
    nickname: <NICKNAME>, 
    avatarURL: <AVATAR_URL>, 
    description: <DESC>
)       
```

#### 4. Create direct-chat-room

In order to demonstrate a direct chat with someone in the chatroom, we created a chatroom with otherUserId we generated before by `IMCreateDirectChatTask()` method. It also followed `PromiseKit` style.

(By the way, chatrooms will not be created repeatedly after executing the method over and over again. Our solid backend server team will handle this.)

#### 5. Enter chat room list scene

After setup, it is time to enter the chat room list scene by using `pushViewController` method which is the native API of `navigationController`.


Here's a sample code: 
```swift=
    // ViewController.swift
    override func viewDidLoad() {
        super.viewDidLoad()
        
        let currentUserId: String = ""       // using current user's id depends on user-model of your app
        let currentUserNickname: String = "" // using current user's nickname depends on user-model of your app

        let accessToken: String? = nil
        // Empty access token is for sandbox/development purpose only.
        // For production, the token should be obtained via secure way.
        // More detail please check section "2. Prepare Access Token" be mentioned above
        
        let otherUserId: String = ""         // using other user's id who you wanna create chat room with
        
                
        IMKit.connect(
            uid: currentUserId, 
            token: accessToken
        ).then { result -> Promise<IMUser> in
            return IMUpdateMyProfileTask().perform(
                nickname: currentUserNickname, 
                avatarURL: nil, 
                description: nil
            )        
        }.then { token -> Promise<[IMRoom]> in                        
            return IMCreateDirectChatTask().perform(invitee: otherUserId)                                 
        }.done { _ in                        
            self.navigationController?.pushViewController(IMRoomsViewController(), animated: true)
        }.catch { error in
            print(error)
        }
    }
```

### Step 5 - Show Chat Room Scene

You can easily enter the chat room scene after clicking on the cell, just like using a common instant messaging app, and there is no coding required. Please feel free to send your first greeting to the Mock User, with text message or image message maybe. The features included in the chatroom are all default, without any customization. 

If there are more ideas you want to implement in your app to make it shine, please check out our documentations.

---
