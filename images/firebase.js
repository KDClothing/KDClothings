
// Replace with your Firebase config
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
};
firebase.initializeApp(firebaseConfig);
function login() {
  const email = document.getElementById('email').value;
  const pass = document.getElementById('password').value;
  firebase.auth().signInWithEmailAndPassword(email, pass);
}
function signup() {
  const email = document.getElementById('email').value;
  const pass = document.getElementById('password').value;
  firebase.auth().createUserWithEmailAndPassword(email, pass);
}
