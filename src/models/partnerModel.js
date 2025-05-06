import mongoose, { modelNames } from "mongoose";

const partnerSchema = new mongoose.Schema({
    partnerName:{
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
    partnerType:{
        type:String,
        required:true
    },
    partnerStatus:{
        type:String,
        default:{pending}
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    updatedAt:{
        type:Date
    }
})


const partner = mongoose.model('partner',partnerSchema);

export default partner ;
