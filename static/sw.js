// [START initialize_firebase_in_sw]
// Import and configure the Firebase SDK
// These scripts are made available when the app is served or
// deployed on Firebase Hosting
// If you do not serve/host your project using Firebase Hosting
// see https://firebase.google.com/docs/web/setup

importScripts('https://www.gstatic.com/firebasejs/5.0.0/firebase-app.js');
// importScripts('https://www.gstatic.com/firebasejs/5.0.0/firebase-messaging.js');

firebase.initializeApp({
  messagingSenderId: '970263218499'
});

// const messaging = firebase.messaging();
// [END initialize_firebase_in_sw]

// chat server 丟過來的 click_action 不 OK，可是我不能複寫他...
// messaging.setBackgroundMessageHandler(function(payload) {
//   var notification = payload.notification;
//   var notificationTitle = notification.title;
//   var notificationOptions = {
//     body: notification.body,
//     icon: 'static/logo.png',
//     data: {
//       room: {
//         id: payload.data.type.split(':')[1]
//       }
//     },
//     click_action: '?room=' + payload.data.type.split(':')[1]
//   };

//   return self.registration.showNotification(
//     notificationTitle,
//     notificationOptions
//   );
// });

// 只好自己寫了
self.addEventListener('push', e => {
  // 是否開啟中
  e.waitUntil(
    (async function() {
      let cs = await clients.matchAll({
        includeUncontrolled: true
      });
      if (!cs || cs.length === 0) {
        // 未開啟，處理推播
        let payload;

        if (e.data && e.data.json) {
          try {
            payload = e.data.json();
          } catch (error) {}
        }

        const notificationTitle =
          (payload.notification && payload.notification.title) || 'IMKit';
        const notificationOptions = {
          body:
            (payload.notification && payload.notification.body) ||
            'Received Message',
          icon:
            (payload.notification && payload.notification.icon) || 'logo.png',
          data: {
            room: {
              id: payload.data.type.split(':')[1]
            }
          }
        };

        e.waitUntil(
          self.registration.showNotification(
            notificationTitle,
            notificationOptions
          )
        );
      } else {
        // 開啟中，不處理
      }
    })()
  );
});

self.addEventListener('notificationclick', e => {
  e.notification.close();

  e.waitUntil(
    (async function() {
      let cs = await clients.matchAll({
        includeUncontrolled: true
      });
      if (!cs || cs.length === 0) {
        clients.openWindow('../?room=' + e.notification.data.room.id);
      } else {
        cs.forEach(el => {
          if (!el.focused) {
            el.focus();
          }
          el.postMessage(e.notification.data.room.id);
        });
      }
    })()
  );
});
