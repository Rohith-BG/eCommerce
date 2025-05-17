import User from "../models/userModel.js"


export async function createUser(userObj){
    try{
        const createdUser = await User.create(userObj);
        if(!createdUser){
            throw new Error('Failed to create a user');
        }
        return createdUser;  
    }catch(error){
        throw error;
    }
}

export async function fetchUser(userId){
    try{
        const user = await User.findById(userId);
        if(!user){
            throw new Error('User not found');
        }
        return user;
    }catch(err){
       throw err;
    }
}

export async function updateUser(userId,newUserData){
    try{
       const updatedUser = await User.findByIdAndUpdate(userId,newUserData,{new:true});
       if(!updatedUser){
          throw new Error('Failed to update the user')
       }
       return updatedUser;
    }
    catch(error){
        throw error;
    }
}


export async function deleteUserById(userId){
    try{
        const deletedUser = await User.findByIdAndDelete(userId);
        if(!deletedUser){
            throw new Error('Failed to delete the user')
        }
        return deletedUser;
    }   
    catch(err){
        throw err;
    }

}

