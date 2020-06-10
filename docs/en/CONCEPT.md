# Concept of IMKit Web SDK

## About IMKit Web SDK

**IMKit** is the Chat SDK (Software Development Kits) developed by [FUNTEK](https://funtek.co). You can effeciently install IMKit Web SDK with **instant messaging and chat functions** to your current website.

IMKit includes Web SDk and a set of chat servers running on the cloud service. It builds the communcations between IMKit Web SDK in your website and chat server, and makes real-time chat happen.

## In-Web Chat

The mission of IMKit Web SDK is to enable the users on your website to chat with each other.

The users don't need to communicate to each other via social messengers out of your website. Ex.
[Facebook Messenger](https://www.messenger.com) / [WhatsApp](https://www.whatsapp.com) / [LINE](https://line.me/)

This is In-Web Chat.

## Component of Chat

There are three main components during chat:

- User: Each user has an unique **Client ID** and a validated **Token** in the chat server.
- Chat Room: Each room has an unique **Room ID** in the chat servrer. Chat Room can be accessed by users and users can chat in chat room. Chat Room can support both 1 on 1 chat and Group Chat.
- Chat Room List: Chat Room List represents the list of chat rooms  which the user has joined or created.

## Chat Scenario Design

Beofre you adopt IMKit Web SDK, you must have a website with existing member system. Besides, you need to design a chat scenario for users to start a 1 on 1 Chat or Group Chat.

> Example 1. A C2C E-commerce Platform
>
> You can provide a **button** for users to chat with product sellers directly. This **button** is the entry point to start the chat.

*****

> Example 2. A C2C Real-Estate Platform
> 
> You can provide a **button** for house buyers to chat with house owners directly. This **button** is also the trigger point to start the chat.

After building a entry point to start the chat on your website, you also need to design an area on your website to display Chat Room List.

For example, you can build a tab in the tab bar for users to check Chat Room List.

## How IMKit Web SDK Works?

First of all, you need to know that IMKit Web SDK must be integrated with the work flow of your website closely. We will introduce how IMKit Web SDK works by following 3 parts.

### Part 1. Create User

In general, your website will get a token to indentify user login status as user finishes the login or registration. Your website can create an user by calling the API and providing this token to Chat Server.

- **Step 1.** User finish the login or regstration on your website.
- **Step 2.** Your Web Server sends a token to your website for this user.
- **Step 3.** You website uses this token to call the API and create an user on Chat Server.

> Chat Server needs to save a set of memeber data from your website. This set of member data doesn't collect confidential data. It only needs to contain chat related information like Display Name and Avatar.

### Part 2: Create Chat Room and Add Users to Chat Room

Next, we will **Create Chat Room** and **Add Users to Chat Room**. 

As an user wants to chat with someone on your website, you need to collect Client IDs of whom will join the room to chat. Then you can call the API to create Chat Room.

- **Step 4.** User triggers a chat with others in a chat scenario on your website (ex. contact with sales, contact with customer service). Then your website collects Client IDs of the invitor and invitees.

- **Step 5.** Your website calls the API to adds Client IDs of invitor and invitess to the dedicated Chat Room.

### Part 3: Display Chat Room List

The last is an indendent part: **Display Chat Room List**.

Your website needs to have a scenario to display **Chat Room List** by using APIs.

- **Step 6.** Your website needs to display Chat Room List by a trigger from users or website.
- **Step 7.** Your website calls the API to get Chat Room List and display it.
