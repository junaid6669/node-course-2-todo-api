// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true }, (err, client)=>{
    if(err){
        return console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to mongodb server');
    // var db = client.db('TodoApp');
    // db.collection("Todos").insertOne({
    //   text: 'Something to do again',
    //   completed: false
    // },(err, result)=>{
    //   if(err){
    //     return console.log('Unable to insert todo', err);
    //   }
    //   console.log(JSON.stringify(result.ops, undefined, 2));
    // });
    // var db = client.db('TodoApp');
    // db.collection('Users').insertOne({
    //   name:'Junaid',
    //   age: '27',
    //   location: 'Islamabad'
    // },(err, result)=>{
    //   if(err){
    //     return console.log('Unable to connect', err)
    //   }
    //   console.log(result.ops[0]._id.getTimestamp());
    // });
    // client.close();
});
