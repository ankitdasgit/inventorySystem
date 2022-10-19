const express = require('express');
const router = express.Router();

router.get('/',(req, res)=>{
    res.status(200).json({
        msg:"this is a get request of copies",
    })
});

router.post('/',(req,res)=>{
    res.status(200).json({
        msg: "this is a post request of copies",
    });
});


module.exports= router;