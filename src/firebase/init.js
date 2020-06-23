 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyCvrqBCUPM5C2pTBy_jqSkfd2hF6UQRwe4",
  authDomain: "vue-chat-2eb04.firebaseapp.com",
  databaseURL: "https://vue-chat-2eb04.firebaseio.com",
  projectId: "vue-chat-2eb04",
  storageBucket: "vue-chat-2eb04.appspot.com",
  messagingSenderId: "78766909714",
  appId: "1:78766909714:web:a2f1478ed501c4d07cebcb",
  measurementId: "G-786XFG5W9S"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots:true});
firebase.analytics();

export default firebaseApp.firestore();