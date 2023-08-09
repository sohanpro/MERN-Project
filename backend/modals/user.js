const mongoose = require('mongoose');
const {Schema} = mongoose;

const userAccount = new Schema(
    {
        name:{
            type:String,
            required: true
        },
        location:{
            type:String,
            required: true
        },
        
            email:{
                type:String,
                required:true
            },
            
            password:{
                    type:String,
                    required:true
                },
                
            date:{
            type:Date,
             default:Date.now
        },
        mobile:
        {
            type:String,
            required:true
        }
        
    }
);
const model = mongoose.model('user',userAccount)
module.exports = model