const express = require('express');
const router = express.Router();
const PenSchema = require('../model/penSchema');
const app = require('../app');
const mongoose = require('mongoose');

router.get('/',(req,res)=>{
   res.status(200).json({
    msg : "this is a get request of pen"
   });
});

router.post('/',(req,res)=>{
    // res.status(200).json({
         // msg: "this is a post request of pen",
    // });
    const pens = new PenSchema({
    itemName: req.body.itemName,
    price: req.body.price,
    quantity: req.body.quantity
    });

    console.log(req.body);

     pens.save();
});




module.exports=router;