var express = require('express');
const axios = require('axios').default;
const firebaseAdmin = require('firebase-admin');
const fs = require('fs');
require('dotenv').config();

const { getAuth, linkWithCredential, EmailAuthProvider } = require("firebase/auth");



var router = express.Router();
console.log(process.cwd(), 'present directory')

const serviceAccount = require(`${process.cwd()}/${process.env.FIREBASE_CREDENTIAL_JSON_FILE}`);

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
  databaseURL: process.env.FIREBASE_DB_URL,
});



/* GET home page. */
router.get('/', async function(req, res, next) {

  const fblink = await firebaseAdmin.auth().generateSignInWithEmailLink('satish.mali@scaletech.xyz', {
    url: 'https://soundmind-79865.firebaseapp.com',
    handleCodeInApp: true,
    iOS: {
      bundleId: 'app.soundmind.mobile1',
    },
    dynamicLinkDomain: 'soundmind.page.link'
  });

  console.log("fblink======>", fblink, "\n<<<<<<<<<<<<<<<<<<<<<endd========================>");

 /*  var credential = firebaseAdmin.auth().EmailAuthProvider.credentialWithLink(
    's@teerer.com', 'https://dfdfdf.com'); */


    

  /* firebaseAdmin.auth().currentUser().reauthenticateWithCredential(authLink)
    .then((usercred) => {
      // The provider is now successfully linked.
      // The phone user can now sign in with their phone number or email.
      console.log("usercredusercred1111", usercred);
    })
    .catch((error) => {
      // Some error occurred.
    });
 */
/*  const auth = firebaseAdmin.auth();

 console.log("auth", auth);
  const verify = await linkWithCredential(auth.currentUser, authLink)
  .then((usercred) => {
    // The provider is now successfully linked.
    // The phone user can now sign in with their phone number or email.

    console.log("usercredusercred", usercred);
  })
  .catch((error) => {
    // Some error occurred.
    console.log("error ====>", error);
  }); */

  //console.log("verify auth link", verify);

  //const auth = await firebaseAdmin.instance.currentUser().getIdToken();
  const userId = 'some-uid';
  const additionalClaims = {
    premiumAccount: true,
  };

/* await firebaseAdmin.auth()
  .createCustomToken(userId, additionalClaims)
  .then(async(customToken) => {
    // Send token back to client

    const user = await firebaseAdmin.auth().verifyIdToken(customToken);
  })
  .catch((error) => {
    console.log('Error creating custom token:', error);
  }); */


  //console.log("auth", auth);
  //const userRecord = await firebaseAdmin.auth().getUser('0ioczLZPy7OHX6OrTDDaBIAHVdb2');

  //console.log("userRecord logs", userRecord);


  res.render('index', { title: 'Express' });
});

module.exports = router;
