const firebase = require('firebase')
const resolve = require('path');

// secrets config:
// -------------------------------------------
// put a secrets file into your home directory 
// named .smartdocs.env:
//
// module.exports = {
//   oauth: {
//     GOOGLE_CLIENT_ID,
//     GOOGLE_CLIENT_SECRET,
//     BASE_URL
//   },
//   firebase: {
//     apiKey,
//     authDomain,
//     databaseURL,
//     projectId,
//     storageBucket,
//     messagingSenderId
//   },
//   firebaseAuth: {
//     email,
//     password,
//   }
// };
// 

const config = require('/home/bryan/.smartdocs.env').firebase;
const {email,password} = require('/home/bryan/.smartdocs.env').firebaseAuth;

// -- // -- // -- // -- // -- // -- // -- // -- // -- //

// Initialize the app, but make sure to do it only once.
//   (We need this for the tests. The test runner busts the require
//   cache when in watch mode; this will cause us to evaluate this
//   file multiple times. Without this protection, we would try to
//   initialize the app again, which causes Firebase to throw.
//
//   This is why global state makes a sad panda.)
if(!firebase.__bonesApp){
  firebase.__bonesApp = firebase.initializeApp(config)
  firebase.auth().signInWithEmailAndPassword(email,password);
}

module.exports = firebase
