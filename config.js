// Firebase config — web app "noy-alon" inside the shared "hazmat-game" project.
// IMPORTANT: the database is shared with the hazmat game. All of this game's data
// lives under ROOT ("noy-alon/..."); never read or write outside it.
export const firebaseConfig = {
  apiKey: "AIzaSyCnya7Hcz8yYKOv6GSJsWKjl0Fu2PDfxOg",
  authDomain: "hazmat-game.firebaseapp.com",
  databaseURL: "https://hazmat-game-default-rtdb.firebaseio.com",
  projectId: "hazmat-game",
  storageBucket: "hazmat-game.firebasestorage.app",
  messagingSenderId: "1057722628376",
  appId: "1:1057722628376:web:6e3dbca9775b3a9828c66d",
  measurementId: "G-SW1S5659EP"
};

export const ROOT = 'noy-alon';

export const isConfigured = () =>
  !!firebaseConfig.apiKey && !firebaseConfig.apiKey.startsWith('PASTE') &&
  !!firebaseConfig.databaseURL && !firebaseConfig.databaseURL.startsWith('PASTE');
