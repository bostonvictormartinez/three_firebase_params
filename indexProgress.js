const functions = require('firebase-functions');

 exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
 });

 exports.helloWorld2 = functions.https.onRequest((request, response) => {
    response.send("Hello2 from Firebase!");
   });

   exports.helloWorld3 = functions.https.onRequest((request, response) => {
    response.send("Hello3 from Firebase!");
   });
   
   exports.webhook=functions.https.onRequest((request,response)=>{
       response.send({
           speech:'Hello world speech.'
       })
   })