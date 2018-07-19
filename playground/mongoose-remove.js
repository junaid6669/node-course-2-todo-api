const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

Todo.remove({}).then((result)=>{
  console.log(result);
});
// following retries the doc that are removed
Todo.findOneAndRemove({_id:'5b5058c666a8f92ce059a9d2'}).then((todo)=>{
  console.log(todo);
});

Todo.findByIdAndRemove('5b5058c666a8f92ce059a9d2').then((todo)=>{
  console.log(todo);
});
