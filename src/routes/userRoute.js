import express from 'express'
import {signUser,userbyId,updateUserData,deleteUser} from '../controllers/userController.js';


const router = express.Router();

router.post('/',signUser);
router.get('/',userbyId);
router.patch('/',updateUserData);
router.delete('/',deleteUser);

export default router;