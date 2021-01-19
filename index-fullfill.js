const functions = require('firebase-functions');




 exports.webhook = functions.https.onRequest((request, response) => {
       console.log('request.body.result.parameter: ', request.body.result.parameter);
       let params=request.body.result.parameter;
       response.send({
         fulfillmentText: `Hi ${params.given-name}.`
       });
            
    
 });

