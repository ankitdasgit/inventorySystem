const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
   res.status(200).json({
    msg : "this is a get request of pen"
   });
});

router.post('/',(req,res,next)=>{
    // res.status(200).json({
         // msg: "this is a post request of pen",
    // });
    console.log(req.body);
});



module.exports=router;