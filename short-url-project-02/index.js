const express = require ("express");
const connectToMongoDb = require('./connection')
const urlRoute = require('./routes/url')
const app = express();

PORT = 8001;

connectToMongoDb('mongodb://localhost:27017/short-url-project-02')


app.use(express.json())
app.use('/url',urlRoute);


app.listen(PORT,()=>{console.log(`server is running on port ${PORT}`)})
