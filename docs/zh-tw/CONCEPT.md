
# IMKit Web SDK 介紹


## 關於 IMKit Web SDK

**IMKit** 是由樂堤科技有限公司 [FUNTEK](https://funtek.co) 所研發的即時通訊軟體開發工具組 (SDK, Software Development Kits)，使用此 Web SDK 可快速將**即時通訊/聊天**功能安裝在您既有的網站內。

IMKit 除了包含 Web SDK 之外，概念上還有一個 (實際上是一組) Chat Server 跑在遠端伺服器上，讓網站內的 SDK 可和 Chat Server 之間彼此聯繫，完成訊息傳遞的功能。

## 什麼是 In-Web Chat ?

IMKit Web SDK 的主要任務，是讓您的使用者可以在您的 Web 內直接彼此對談。

不需要跳離您的網站，轉去其他的通訊軟體溝通，例如： [Facebook Messenger](https://www.messenger.com) / [WhatsApp](https://www.whatsapp.com) / [LINE](https://line.me/)

我們稱這種在網站內直接讓使用者間彼此對談的功能，叫做 **In-Web Chat**。

## 聊天元素

整個聊天過程中我們會談到的元素包含：

- 使用者 (User)：每個使用者會建立一個唯一的 **Client ID** 與一個有效的 **Token** 在 Chat Server 上。
-  聊天室 (Chat Room)：每個聊天室會建立一個唯一的 **Room ID** 在 Chat Server 上。使用者可以進入聊天室，並且在聊天室中彼此對談。聊天室支援 **一對一聊天**與**多人群聊**。
- 聊天室列表 (Chat Room List)：聊天室列表是一個列表，包含使用者曾經加入過或建立的每個聊天室。

## 使用 IMKit 前的情境設計

使用 IMKit Web SDK 之前，您需要先有一個網站，並且已經有既有的使用者或會員資料。

在網站使用 IMKit Web SDK 時，需要您先設計一個情境，是可讓兩個使用者，或是多個使用者建立一對一聊天或多人群聊的觸發點。

> 舉例 1，如果您的網站是一個 C2C 電商平台，專門讓使用者可以在此平台上販售自己的商品，那麼您可以設計一個使用情境。例如在商品列表的顯示頁面上，點選某一個商品進入商品資訊頁時，設計一個**按鈕**，讓使用者 A 可以點選這個按鈕，直接和商品的賣家做直接對談，這個**按鈕**就是建立聊天室的起始點。

-

> 舉例 2，如果您的網站是一個 C2C 房屋販售平台，讓使用者可以在此平台上刊登自己的房屋進行出售，那麼您可以設計一個使用情境，例如在房屋列表顯示頁面上，點選某一個房屋進入房屋資訊頁時，設計一個**按鈕**，讓使用者 A 可以點選這個按鈕，直接和屋主做直接對談，這個**按鈕**也同樣是建立聊天室的起始點。

有了建立一對一或多人群聊的觸發點之後，您還需要在網站中設計區塊用來顯示聊天室列表，例如在網站主頁面的下方 tab bar 上，建立一個 tab 來放置聊天室列表的按鈕。

## IMKit Web SDK 的基本運作流程

首先，要跟您告知，IMKit SDK 的運作需要和您的網站緊密結合。

這邊分成**三部分**來說明基本運作流程。

### 第一部分：建立使用者

IMKit 和您的網站一起運作的流程如下。

首先您的網站通常會在使用者註冊或登入時，取得一個 token 來記錄這個 user 已經登入。網站接下來就可呼叫 IMKit Web SDK 提供的 API，傳遞此 token 給 IMKit 的遠端 Chat Server，在 IMKit Chat Server 上建立使用者。

- **步驟1.** 使用者透過您的 Web 進行註冊或登入至您的後端 Server 
- **步驟2.** 您的後端 Server 回傳 Token 至您的 Web 
- **步驟3.** 您的 Web 使用此 Token 向 IMKit Chat Server 建立使用者

>【註】IMKit 的 Chat Server 內會需要有一份您的會員資料。此會員資料不需要存放機密資料，只需傳遞在聊天過程中所需的必要資料即可，比方說使用者的顯示名稱 (Display Name)、顯示頭像 (Avatar) 等。

### 第二部分：將使用者加入聊天室

接下來是建立聊天室。這裡會需要在您網站內設計情境，來收集要加入到聊天室內的使用者 ID 之後，接著呼叫 API 即可完成聊天室的建立。

- **步驟4.** 在您的 Web 某個情境操作下，使用者觸發進入聊天室（例如：聯繫賣家、聯絡客服），您收集該使用者 ID 與其他對談對象的 ID
- **步驟5.** 您的 Web 呼叫 API，將要進入聊天室的使用者 ID 加入該聊天室

### 第三部分：顯示聊天室列表

這邊是比較獨立的部分：顯示聊天室列表。需要您在網站內設計一個情境，來呼叫 API 顯示聊天室列表。

- **步驟6.** 在您的 Web 某個情境操作下，透過使用者觸發或頁面更新以顯示聊天室列表
- **步驟7.** 您的 Web 呼叫 API，顯示聊天室列表
                                                               