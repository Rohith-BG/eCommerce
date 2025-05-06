import mongoose from "mongoose";

const userGroupSchema = new mongoose.Schema({
    roleName:{
        type:String,
        required:true
    }
});

const userGroup = mongoose.model('userGroup',userGroupSchema);

export default userGroup;
