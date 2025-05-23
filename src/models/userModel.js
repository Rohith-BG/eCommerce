import mongoose from 'mongoose'
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    roles:{
        type:[String],
        default:['user'],
        required:true
    },
    createdAt:{
        type: Date ,
        default : Date.now
    },
    updatedBy:{
        type:String,
        default:"None",
        required:true
    },
    updatedAt:{
        type:Date,
        default:Date.now
    }
})

userSchema.pre('save',async function(next){
    if(!this.isModified('password')){
        return next();
    }
    try{
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        const hashedPassword = await bcrypt.hash(this.password,salt);
        this.password = hashedPassword ;
    }
    catch(err){
        next(err);
    }  
})

const User = mongoose.model('User',userSchema);

export default User;