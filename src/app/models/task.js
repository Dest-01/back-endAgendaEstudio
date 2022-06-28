const mongoose = require('mongoose')
const Config = require('../../config');
const AutoIncrementFactory = require('mongoose-sequence');


const Task = new mongoose.Schema({
     title:{
         type: String,
         required: true,
         min: 2,
         max: 65
     },
     note:{
         type: String,
         required: true,
         min: 2,
         max: 300
     },
     isCompleted:{
         type: Number,
         required: false
     },
     date:{
         type: String,
         required: true
     },
     startTime: {
        type: String,
         required: true
     },
     endTime: {
        type: String,
        required: true
     },
     color: {
         type: Number,
         required: true
     },
     remind: {
         type: Number,
         required: true
     },
     repeat: {
         type: String,
         required: true
     }
})

// initialize connection with host
const connection = mongoose.createConnection(Config.MONGO_HOST_DB);
const AutoIncrement = AutoIncrementFactory(connection);

// Wrapping mongo plugin autoincrement
Task.plugin(AutoIncrement, {inc_field: 'id'})

module.exports = connection.model('Task', Task)