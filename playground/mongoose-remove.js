const { ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

// Todo.findOneAndRemove({_id: ''}).then((todo) => {

// });

Todo.findByIdAndRemove('5ba14f15e1ecfb74d0c40c2e').then((todo) => {
    console.log(todo);
});