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

    // delete many
      // db.collection("Todos").deleteMany({completed : true }).then((result)=>{
      //   console.log(result);
      // });
      
    // delete one
      // db.collection("Todos").deleteOne({completed : true }).then((result)=>{
        // console.log(result);
      // });

    // Find one and delete
      // db.collection("Todos").findOneAndDelete({completed : true }).then((result)=>{
        // console.log(result);
      // });

     //client.close();
});
