var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
app.use(bodyParser.json()); // middleware takes the json data and attaches to the request
app.post('/todos',(req, res)=>{
  //console.log(req.body);
  var todo = new Todo({
    text: req.body.text
  });
  todo.save().then((doc)=>{
    res.send(doc);
  },(e)=>{
    res.status(400).send(e);
  });
});










app.listen(3000,()=>{
  console.log('Started on port 3000');
});




















// var Todo = mongoose.model('Todo', {
//   text: {
//     type: String,
//     required: true,
//     minlength: 1,
//     trim: true
//   },
//   completed: {
//     type: Boolean,
//     default: false
//   },
//   completedAt: {
//     type: Number,
//     default: null
//   }
// });

// var newTodo = new Todo({
//   text: 'Cook dinner'
// });
//
// newTodo.save().then((doc)=>{
//   console.log('Save Tode: ', doc);
// },(e)=>{
//   console.log('Unable to save Todo');
// });


// var otherTodo = new Todo({
//   text : 'Edit this video'
// });
// otherTodo.save().then((doc)=>{
//   console.log('OTher todo saved: ', doc);
// }, (e)=>{
//   console.log('Unable to save other todo');
// });


// var User = mongoose.model('User', {
//   email: {
//     type: String,
//     required: true,
//     trim: true,
//     minlength: 1
//   }
// });
//
// var user = new User({
//   email: " junaidali0001@gmail.com "
// });
//
// user.save().then((doc)=>{
//   console.log('User Saved', doc);
// },(e)=>{
//   console.log('Unable to save User', e);
// });
