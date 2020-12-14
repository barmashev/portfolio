const app = {};

app.init = function () {
  console.log("ready");

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyA9mWNpNHwf0857gkyO-hHbcHzeCGHNWvk",
    authDomain: "portfolio-4b928.firebaseapp.com",
    projectId: "portfolio-4b928",
    storageBucket: "portfolio-4b928.appspot.com",
    messagingSenderId: "114829706415",
    appId: "1:114829706415:web:94b0da68cae9174db2c05a",
    measurementId: "G-NQVCMJWL7P",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
};

app.eventListeners = function () {};

$(function () {
  app.init();
  app.eventListeners();
});
