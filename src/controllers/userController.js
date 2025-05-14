import {createUser,fetchUser,updateUser,deleteUserById} from "../services/userService.js";

// creating user 
export async function signUser(req,res){
    try{
        const user = req.body;
        
        const createdUser = await createUser(user);
     
        res.status(201).json(createdUser);
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
}

// retrival of the user by their Id

export async function userbyId(req,res){
    const userId = req.query.id;
    
    try{
        const user = await fetchUser(userId);
        res.status(200).json(user);
    }catch(err){
        res.status(404).json({message:'user not found'});
    }
}

// update user 

export async function updateUserData (req,res){
    try{
        const userId = req.query.id;
        const updatedData = req.body;
        const newData = await updateUser(userId,updatedData);
      
        return res.json({"updatedData":newData});
    }
    catch(err){
        return res.status(500).json({message:err.message})
    }
}


// delete user

export async function deleteUser(req,res){
    try{
        const userId = req.query.id;
       
        await deleteUserById(userId);

        return res.status(200).json({'message':'User deleted succesfully'})
       
      
    }
    catch(err){
        return res.json({message:err.message})
    }
}



