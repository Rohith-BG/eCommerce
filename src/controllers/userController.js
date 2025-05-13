import {createUser,fetchUser,updateUser,deleteUserById} from "../services/userService.js";

// creating user 
export const signUser = async (req,res)=>{
    try{
        const user = req.body;
        // console.log(user);
        const createdUser = await createUser(user);
     
        res.status(201).json(createdUser);
    }
    catch(err){
        res.status(500).json({'message':'Error in creating the user'});
    }
}

// retrival of the user by their Id

export const userbyId = async(req,res)=>{
    const userId = req.query.id;
    console.log(userId);

    try{
        const user = await fetchUser(userId);
        if(!user){
            res.status(404).json({'message':'user not found'})
        }
        res.status(200).json(user);
    }catch(err){
        res.status(500).json({'message':'Internal error'});
    }
}

// update user 

export const updateUserData = async (req,res)=>{
    try{
        const userId = req.query.id;
        const updatedData = req.body;
        const newData = await updateUser(userId,updatedData);
        if(!newData){
            return res.json({"message":"Updation failed"})
        } 
        return res.json({"message":"User updated"})
    }
    catch(err){
        return res.status(500).json({"message":"Error occured" })
    }
}


// delete user

export const deleteUser = async (req,res)=>{
    try{
        const userId = req.query.id;
       
        const deletedUser = await deleteUserById(userId);
       
        if(!deletedUser){
            return res.json({"msg":"user not deleted"})
        }
        return res.status(200).json({"message":"user deleted successfully"});
    }
    catch(err){
        return res.json({"message":err.message})
    }
}



