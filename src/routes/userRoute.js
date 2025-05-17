import express from 'express'
import {signUser,userbyId,updateUserData,deleteUser} from '../controllers/userController.js';
// import userbyId from  "../controllers/userController.js";

const router = express.Router();

router.post('/signUp',signUser);
router.get('/getUser',userbyId);
router.patch('/update',updateUserData);
router.delete('/delete',deleteUser);

export default router;