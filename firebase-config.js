// =============================================
// Firebase Configuration (Optional)
// =============================================
// Enabling Firebase unlocks the real-time "Connected Users" map on the
// Stats screen.  Without it the map still works — it shows your own location
// and a handful of demo markers.
//
// Quick setup (free):
//   1. Go to https://console.firebase.google.com and create a new project.
//   2. Add a Web app, copy the config object shown during setup.
//   3. In the Firebase Console, go to Build → Realtime Database, click
//      "Create database" and choose "Start in test mode" (good for demos).
//   4. Replace the placeholder values below with your real config.
//   5. Set FIREBASE_ENABLED = true.
//
// Note: Firebase web config values are NOT secrets — they are safe to commit.
// Security is enforced by your Realtime Database rules, not by keeping the
// config private.

const FIREBASE_CONFIG = {
    apiKey:            'YOUR_API_KEY',
    authDomain:        'YOUR_PROJECT.firebaseapp.com',
    databaseURL:       'https://YOUR_PROJECT-default-rtdb.firebaseio.com',
    projectId:         'YOUR_PROJECT_ID',
    storageBucket:     'YOUR_PROJECT.appspot.com',
    messagingSenderId: 'YOUR_SENDER_ID',
    appId:             'YOUR_APP_ID'
};

// Set this to true after filling in real values above.
const FIREBASE_ENABLED = false;
