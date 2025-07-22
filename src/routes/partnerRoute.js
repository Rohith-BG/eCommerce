import express from 'express'
import { createPartner , getPartner, updatePartner, deletePartner} from '../controllers/partnerController.js'

const router = express.Router();

router.post('/',createPartner);

router.get('/',getPartner);

router.put('/',updatePartner);

router.delete('/',deletePartner)

export default router;

