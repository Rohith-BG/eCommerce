import mongoose from "mongoose";

const partnerSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true
    },
    emailId:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    status:{
        type:String,
        default:'PENDING'
    },
},{timestamps:true});


const partner = mongoose.model('partner',partnerSchema);

export default partner ;
