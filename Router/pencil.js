const express= require('express');
const router = express.Router();

router.get('/',(req, res)=>{
    res.status(200).json({
        msg: 'this is a pencil get request',
    });
});
 

router.post('/',(req,res)=>{
    res.status(200).json({
        msg:"this is a pencil post request",
    });
});

module.exports= router; 