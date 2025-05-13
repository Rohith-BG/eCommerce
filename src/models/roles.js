import mongoose from "mongoose";

const roleSchema = new mongoose.Schema({
    roleName:{
        type:String,
        required:true
    }
});

const roles = mongoose.model('roles',roleSchema);

export default roles;
