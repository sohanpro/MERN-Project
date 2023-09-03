const express = require('express')
const router = express.Router()

router.post('/foodData',function(req,res)
{
    try{
        res.send([global.CatagoryData,global.food_items])
    }
    catch(error)
    {
        console.error(error.message);
        res.send("server Error");
    }
})

module.exports = router;