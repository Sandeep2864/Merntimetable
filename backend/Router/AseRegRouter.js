const express=require('express');
const router=express.Router();
const reg=require('../Schema/AseSchema');

router.post('/aseL',(req,res)=> {
    const {cluster,aseL,aseLSec,aseT,aseTSec,aseP,asePSec,aseS,aseSSec}=req.body;
    const newReg=new reg({
        cluster,
        aseL,
        aseLSec,
        aseT,
        aseTSec,
        aseP,
        asePSec,
        aseS,
        aseSSec,
    });
    newReg
    .save()
    .then(()=> {
        console.log("Data Saved to the database");
        res.status(200).json({message: 'Data saved successfully'});
    })
    .catch((err)=> {
        console.error('Error saving data to the database', err);
      res.status(500).json({ error: 'Internal server error' });
    });
});

module.exports =router;