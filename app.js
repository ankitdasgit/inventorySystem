const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const pencilRouter = require('./Router/pencil');
const penRouter = require('./Router/pen');
const copiesRouter = require('./Router/copies');
const { connected } = require('process');


app.use('/pencil',pencilRouter);
app.use('/pen',penRouter);
app.use('/copies',copiesRouter);

mongoose.connect("mongodb+srv://ankitdas:123@owndatabase.ho84hwh.mongodb.net/test");

mongoose.connection.on('error',err=>{
    console.log('connection failed');
});
mongoose.connection.on('connected',connected=>{
    console.log("connected with database");
});


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.use((req, res)=>{
res.status(404).json({
    msg: 'opps...Page Not Found',
});
});



module.exports= app;