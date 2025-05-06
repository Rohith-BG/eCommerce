import mongoose from "mongoose";
import User from "./userModel.js"
import userGroup from "./userGroupModel.js";

const userRoleSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    roleId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'userGroup'
    }
})

const userRole = mongoose.model('userRole',userRoleSchema);

export default userRole;