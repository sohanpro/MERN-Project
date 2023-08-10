const express = require('express')
const router = express.Router()
const {body, validationResult} = require('express-validator');
 const User = require('../modals/user')
 //const mongoose = require('mongoose');


router.post('/createuser',[
    body('email','Enter a valid email').isEmail(),
    body('name','Enter a valid name ').isLength({min:4}),
    
    body('password','Password length Must be greater than 5 character').isLength({min:6})
    ],async function (req,res)
{   
    const errors = validationResult(req)
    
        if(!errors.isEmpty())
        {
            return res.status(400).json({errors:errors.array()})
        }
    
    try {
        await User.create(
            {
                name: req.body.name,
                password:req.body.password,
                email:req.body.email,
                location:req.body.location,
                mobile:req.body.mobile
                
            }
        );
        res.json({success:true,
        message:"User Account Created succesfully"})
        
    } catch (error) {
        console.log(error)
        res.json({success:false})
        
    }
});

module.exports = router;