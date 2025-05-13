import User from "../models/userModel.js"


export const createUser = async (userObj)=>{
    try{
        const createdUser = await User.create(userObj);
        console.log(createdUser); 
        return createdUser;  
    }catch(err){
        console.log(err);
    }
}

export const fetchUser = async (userId)=>{
    try{
        return await User.findById(userId);
    }catch(err){
        console.log(err);
    }
}

export const updateUser = async(userId,newUserData)=>{
    try{
       const updatedUser = await User.findByIdAndUpdate(userId,newUserData,{new:true});
       return updatedUser;
    }
    catch(err){
        console.log(err);
    }
}


export const deleteUserById = async (userId) =>{
    try{
        const deletedUser = await User.findByIdAndDelete(userId);
        return deletedUser;
    }   
    catch(err){
        console.log(err);
    }

}

