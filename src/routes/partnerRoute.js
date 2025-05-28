import express from 'express'
import { createPartner , getPartner, updatePartner, deletePartner} from '../controllers/partnerController.js'

const router = express.Router();

router.post('/createPartner',createPartner);

router.get('/details/:id',getPartner);

router.put('/updateDetails/:id',updatePartner);

router.delete('/delete/:id',deletePartner)

export default router;

