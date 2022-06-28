const mongoose = require('mongoose');
const Config = require('../config');

mongoose.connect(Config.MONGO_HOST_DB,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then((db)=> console.log('Connection Sucessfull'))
.catch((err)=> console.log(err));

module.exports = mongoose;