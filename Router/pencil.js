const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const app = require("../app");
const PencilSchema= require('../model/pencilSchema');


router.get("/", (req, res) => {
  // res.status(200).json({
  //   msg: "this is a pencil get request",
  // });
  PencilSchema.find()
  .then(result=>{
    res.status(200).json({
      pencilData : result
    });
  })
  .catch(err=>{
    console.log(err);
  })

});



router.post("/", (req, res) => {
  // res.status(200).json({
  //     msg:"this is a pencil post request",
  // });
  const pencils = new PencilSchema({
    itemName: req.body.itemName,
    price: req.body.price,
    quantity: req.body.quantity
  });

  console.log(req.body);
    
  pencils.save()
    // .then((result) => {
    //   console.log(result);
    //   res.status(200).json({
    //     newPencil: result,
    //   });
    // }).catch((err) => {
    //   console.log(err);
    //   res.status(400).json({
    //     error: err,
    //   });
    // });
});

module.exports = router;
