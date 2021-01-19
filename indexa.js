const functions=require(functions-firebase);
var admin=require(functions-admin);
admin.initializeApp(functions.config().firestore);
exports.webhook=functions.https.onRequest((request, response)=>{
    switch(request.body.results.action){
        case 'BookAppt':
            console.log('request.body.results.parameters: ', 
            request.body.results.parameters);
            params=request.body.results.parameters;

            firestore.collection('orders').add(params).then(()=>{
                response.send({
                    speech:`so order is ${params.RoomType} for ${params.persons}.`
                });
                
            })
            .catch((e=>{
                console.log('error', e)
                response.send({
                    speech:'error'
                });
            }));
            break;
            case 'CountOrders':
                firestore.collection('orders').get().then((querySnapshot)=>{
                    var orders=[];
                    querySnapshot.forEach((doc)=>{
                    orders.push(doc, data())
                    });

                    var speech='here is order';
                    orders.forEach((eachOrder, index)=>{
                        speech+=`${orders.length} orders.`
                    })
                    .catch((e)=>{
                        console.log('error: ')
                        response.send({
                            speech:'error'
                        });                        
                    }) ;
                       
                });
            case 'RecallOrder':
                    firestore.collection('orders').get().then((querySnapshot)=>{
                        var orders=[];
                        querySnapshot.forEach((doc)=>{
                        orders.push(doc, data())
                        });
    
                        var speech='here is order';
                        orders.forEach((eachOrder, index)=>{
                            speech+=`${orders.length} orders.`
                        })
                        .catch((e)=>{
                            console.log('error: ')
                            response.send({
                                speech:'error'
                            });                        
                        }) ;
                           
                    });

            
    }
})