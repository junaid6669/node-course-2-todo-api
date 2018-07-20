require('./config/config')

const express = require('express');
const _ = require('lodash'); // for the update purpose
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var {authenticate} = require('./middleware/authenticate');

var app = express();
//const port = process.env.PORT || 3000;
const port = process.env.PORT;


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

app.get('/todos',(req,res)=>{
  Todo.find().then((todos)=>{
    res.send({
      todos:todos
    })
  },(e)=>{
    res.status(400).send(e);
  });
});

//GET /todos/345434
app.get('/todos/:id', (req, res)=>{
  var id = req.params.id;
   // validate id
  if(!ObjectID.isValid(id)){
    return res.status(400).send();
  }
  Todo.findById(id).then((todo)=>{
    if(!todo) {
      return res.status(400).send();
    }
    res.send({todo:todo});

  }).catch((e)=>{
    res.status(400).send();
  });
});

app.delete('/todos/:id', (req,res)=>{
  var id = req.params.id;
   if(!ObjectID.isValid(id)){
    return res.status(404).send();
  }

  Todo.findByIdAndRemove(id).then((todo)=>{
    if(!todo){
      return res.status(404).send();
    }
    res.send({todo});

  }).catch((e)=>{
    res.status(400).send();
  });
});

app.patch('/todos/:id', (req,res)=>{
  var id = req.params.id;
  var body = _.pick(req.body, ['text','completed']);
  if(!ObjectID.isValid(id)){
   return res.status(404).send();
  }

  if(_.isBoolean(body.completed) && body.completed) {
    body.completedAt = new Date().getTime();
  }else{
    body.completed = false;
    body.completedAt = null;
  }

  Todo.findByIdAndUpdate(id, {$set:body},{new: true}).then((todo)=>{
     if(!todo){
       return res.status(404).send();
     }

     res.send({todo});

  }).catch((e)=>{
    res.status(400).send();
  });
});

//POST users
app.post('/users', (req, res)=>{
  var body = _.pick(req.body, ['email','password']);
  var user = new User(body); // because body is itseld an object containing email and password

  // User.findByToken //Model method
  // user.generateAuthToken //Instance method
 user.save().then(()=>{
    return user.generateAuthToken();
     // res.send(user);
  }).then((token)=>{
    res.header('x-auth', token).send(user);
  }).catch((e) =>{
     res.status(400).send(e);
  })
});


app.get('/users/me', authenticate, (req,res)=>{
  res.send(req.user);
  // var token = req.header('x-auth');
  //  User.findByToken(token).then((user)=>{
  //   if(!user){
  //     return Promise.reject();
  //   }
  //   res.send(user);
  // }).catch((e)=>{
  //   res.status(401).send();
  // });
});


app.listen(port,()=>{
  console.log(`Started on port ${port}`);
});

module.exports = {
  app:app
};


















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
