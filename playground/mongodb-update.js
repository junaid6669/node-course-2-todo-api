// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true }, (err, client)=>{
    if(err){
        return console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to mongodb server');
    var db = client.db('TodoApp');
    //Find one and Update
    // db.collection('Todos').findOneAndUpdate({
    //   _id: new ObjectID('5b4edcc683c2d40810335372')
    // },{
    //   $set: {
    //     completed: false
    //   }
    // },{
    //   returnOriginal:false
    // }).then((result)=>{
    //   console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
      _id: new ObjectID('5b4ee50bd85bed38dce1142a')
    },{
      $set: {
        name: 'Junaid ali'
      } 
    },{
      returnOriginal:false
    }).then((result)=>{
      console.log(result);
    });
     //client.close();
});
