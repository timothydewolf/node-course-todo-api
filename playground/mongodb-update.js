//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
if (err) {
    return console.log('Unable to connect to MongoDB server');
}
console.log('Connected to MongoDB server');

// db.collection('Todos').findOneAndUpdate({
//     _id: new ObjectID('5b9ff42cc31ec0402f27697f')
// }, {
//     $set: {
//         completed: true
//     }
// }, {
//         returnOriginal: false
// }).then((result) => {
//     console.log(result);
// });

db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5b9fe506871672222cfe6436')
}, {
    $set: {
        name: 'Tim'
    },
    $inc: {
        age: 1
    }
}, {
        returnOriginal: false
}).then((result) => {
    console.log(result);
});

//db.close();
});