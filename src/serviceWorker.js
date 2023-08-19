// // serviceWorker.js

// // Define a version for your service worker
// const version = 'v1';

// // Install event: This is triggered when the service worker is registered.
// self.addEventListener('install', event => {
//   console.log(`Service Worker ${version} installed`);

//   // Perform any necessary caching or setup here
// });

// // Activate event: This is triggered when the service worker becomes active.
// self.addEventListener('activate', event => {
//   console.log(`Service Worker ${version} activated`);

//   // Clean up any old caches or perform other tasks here
// });

// // Fetch event: This is triggered whenever a network request is made from the browser.
// self.addEventListener('fetch', event => {
//   console.log(`Fetching: ${event.request.url}`);

//   // You can intercept requests here and provide custom responses,
//   // or use the cache to serve responses.
//   event.respondWith(fetch(event.request));
// });

// // Push event: This is triggered when a push notification is received.
// self.addEventListener('push', event => {
//   const options = {
//     body: event.data.text(),
//     icon: 'icon.png', // Path to your notification icon
//   };

//   event.waitUntil(
//     self.registration.showNotification('Push Notification', options)
//   );
// });
