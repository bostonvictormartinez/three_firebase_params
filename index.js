const functions = require('firebase-functions');


 exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

exports.helloWorldTwo = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase!");
   });

   exports.helloWorldThree = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase!");
   });