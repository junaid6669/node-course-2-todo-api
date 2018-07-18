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
    //db.collection("Todos").find({completed:true}).toArray().then((docs)=>{
    // db.collection("Todos").find({
    //   _id:new ObjectID('5b4edcfdeedf35204cdb2986')
    // }).toArray().then((docs)=>{
    //
    //   console.log('Todos');
    //   console.log(JSON.stringify(docs, undefined, 2));
    // },(err)=>{
    //   console.log('Unable to fetch todos', err);
    // });
    db.collection("Todos").count().then((count)=>{
      console.log(`Todos count: ${count}`);
     },(err)=>{
      console.log('Unable to fetch todos', err);
    });

     //client.close();
});
