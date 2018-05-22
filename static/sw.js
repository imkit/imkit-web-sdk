// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-app.js')
// importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-messaging.js')

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
var config = {
    apiKey: 'AIzaSyA7zQF5lkQFICRpt-74QIlIEeOlAmZPQFA',
    authDomain: 'web-pn.firebaseapp.com',
    databaseURL: 'https://web-pn.firebaseio.com',
    projectId: 'web-pn',
    storageBucket: 'web-pn.appspot.com',
    messagingSenderId: '208722133164'
}

firebase.initializeApp(config)

self.addEventListener('push', e => {
    // self.postMessage('qqqqqqqqqqqqqqqq from worker')    
    let j
    
    if (e.data && e.data.json) {
        try {
            j = e.data.json()
        } catch (error) {
        }
    }
    console.log('push', j)
    
    const notificationTitle = j.notification && j.notification.title || 'IMKit'
    const notificationOptions = {
        body: j.notification && j.notification.body || 'Received Message',
        icon: '/static/logo.png',
        data: {
            room: {
                id: j.data.type.split(':')[1]
            }
        }
    }

    e.waitUntil(self.registration.showNotification(notificationTitle, notificationOptions))
})

self.addEventListener('notificationclick', (event) => {
    console.log('[Service Worker] Notification click Received.')

    event.notification.close()

    event.waitUntil(async function() {
        let cs = await clients.matchAll({
            includeUncontrolled: true
        })
        if (!cs || cs.length === 0) {
            clients.openWindow('http://localhost:8081')
        } else {
            cs.forEach(el => {
                if (!el.focused) {
                    el.focus()
                }
                // console.log(event)
                el.postMessage(event.notification.data.room)
            })
        }

    }())
})