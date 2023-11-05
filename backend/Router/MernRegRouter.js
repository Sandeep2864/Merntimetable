const express=require('express');
const router=express.Router();
const reg=require('../Schema/MernSchema');

router.post('/mernL',(req,res)=> {
    const {cluster,mernL, mernLSec,mernT,mernTSec,mernP,mernPSec,mernS,mernSSec}=req.body;
    const newReg=new reg({
        cluster,
        mernL,
        mernLSec,
        mernT,
        mernTSec,
        mernP,
        mernPSec,
        mernS,
        mernSSec,
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