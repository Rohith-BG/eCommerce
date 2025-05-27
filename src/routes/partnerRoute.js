import express from 'express'
import { signPartner , getPartner, Update, deleteAccount} from '../controllers/partnerController.js'

const router = express.Router();

router.post('/createPartner',signPartner);

router.get('/details/:id',getPartner);

router.put('/updateDetails/:id',Update);

router.delete('/delete/:id',deleteAccount)

export default router;

