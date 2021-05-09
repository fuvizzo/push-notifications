// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.5.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.5.0/firebase-messaging.js');

const firebaseConfig = {
  apiKey: 'AIzaSyBKPdw1B2BbRTXtwhe91axpENQqt7JdQvM',
  authDomain: 'test-project-1-295609.firebaseapp.com',
  projectId: 'test-project-1-295609',
  storageBucket: 'test-project-1-295609.appspot.com',
  messagingSenderId: '701349201372',
  appId: '1:701349201372:web:2e5b6675d3c251cf9cfb19',
};

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp(firebaseConfig);

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    '[firebase-messaging-sw.js] Received background message ',
    payload
  );
  // Customize notification here
  /*  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png',
  };

  self.registration.showNotification(notificationTitle, notificationOptions); */
});
