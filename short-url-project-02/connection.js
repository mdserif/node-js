const mongoose = require("mongoose");

const connectToMongoDb = (url)=>{
    return mongoose.connect(url).then(()=>console.log('database is connected'))
}

module.exports = connectToMongoDb;