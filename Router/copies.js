const express = require('express');
const router = express.Router();
const CopySchema = require('../model/copySchema');

router.get('/',(req, res)=>{
    res.status(200).json({
        msg:"this is a get request of copies",
    })
});

router.post('/',(req,res)=>{
    // res.status(200).json({
    //     msg: "this is a post request of copies",
    // });
    const copies = new CopySchema({
        itemName: req.body.itemName,
        price: req.body.price,
        quantity: req.body.quantity,
        size : req.body.size,
    });

    console.log(req.body);

    copies.save();

});


module.exports= router;