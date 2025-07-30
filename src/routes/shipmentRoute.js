import express from "express";
import { createShipment, deleteShipment, getShipment, updateShipment } from "../controllers/shipmentController.js";

const router = express.Router();

router.post('/',createShipment)

router.get('/',getShipment)

router.put('/',updateShipment)

router.delete('/',deleteShipment)

export default router