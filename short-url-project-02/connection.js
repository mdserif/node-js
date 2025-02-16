const mongoose = require("mongoose");

const connectToMongoDb = async (url)=>{
    return await mongoose.connect(url).then(()=>console.log('database is connected'))
}

module.exports = connectToMongoDb;