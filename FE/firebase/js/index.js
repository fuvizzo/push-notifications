const firebaseConfig = {
  apiKey: 'AIzaSyBKPdw1B2BbRTXtwhe91axpENQqt7JdQvM',
  authDomain: 'test-project-1-295609.firebaseapp.com',
  projectId: 'test-project-1-295609',
  storageBucket: 'test-project-1-295609.appspot.com',
  messagingSenderId: '701349201372',
  appId: '1:701349201372:web:2e5b6675d3c251cf9cfb19',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const registrationToken = document.getElementById('reg-token');

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

navigator.serviceWorker
  .register('/js/firebase-messaging-sw.js')
  .then((registration) => {
    messaging.useServiceWorker(registration);

    // Add the public key generated from the console here.

    // Get registration token. Initially this makes a network call, once retrieved
    // subsequent calls to getToken will return from cache.
    messaging
      .getToken({
        vapidKey:
          'BFDbBqqONv7qz-mVW2mgwxMM3koBjKvdDQjtWzspC0wXtcFbcwScrLGAxU6eRtj_V-kL5q1-ClHVkG0ZtA7sBRk',
      })
      .then((currentToken) => {
        if (currentToken) {
          console.log(currentToken);
          registrationToken.innerText = currentToken;
          messaging.onMessage((payload) => {
            console.log('Message received. ', payload);
          });

          // Send the token to your server and update the UI if necessary
          // ...
        } else {
          // Show permission request UI
          console.log(
            'No registration token available. Request permission to generate one.'
          );
          // ...
        }
      })
      .catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
        // ...
      });

    messaging
      .requestPermission()
      .then(() => {
        console.log('Permission granted!');
      })
      .catch(() => {
        console.log('Permission denied!');
      });
  });
