const functions=require('firebase-functions');
admin=require('firebase-admin');
admin.initializeApp(functions.config().firestore);
firestore=admin.firestore;

exports.webhook=functions.https.onRequest((
    request, response)=>{
    firestore.collection('order').add(params).then((doc)=>{
        console.log('request.body.results.parameters: ',
        request.body.results.parameters);
        params=request.body.results.parameters
        speech=`your confirm info is ${params.name}, and your ${param.ApptType} ${params.appt}, for ${params.date} at ${params.time} and your 
        contact info is ${params.email}`
        response.send({
            speech:'speech'
        });
    })
    .catch((e=>{
        console.log('error: ', 
        response.send({
            speech:'error'
        }));
    }));

    
    
    })