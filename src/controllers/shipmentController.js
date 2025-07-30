import { insertShipment ,getShipmentById, updateShipmentById, deleteShipmentById} from "../services/shipmentService.js"

export async function createShipment(req,res){
    try{
        const shipmentData = req?.body
        if(!shipmentData){
            throw Object.assign(new Error(`fields are required`),{statusCode:400})
        }
        const shipment = await insertShipment(shipmentData)

        res.status(201).json(shipment)
    }
    catch(err){
        res.status(err.statusCode).json(err.stack)
    }
}

export async function getShipment(req,res){
    try{
        const shipmentId = req?.query?.id
        if(!shipmentId){
            throw Object.assign(new Error(`shipmentId is a required field`),{statusCode:400})
        }
        const shipment = await getShipmentById(shipmentId);

        res.status(200).json(shipment)
    }
    catch(err){
        res.json(err.statusCode).json(err.stack)
    }
}

export async function updateShipment(req,res){
    try{
        const shipmentId = req?.query?.id
        if(!shipmentId){
            throw Object.assign(new Error(`shipmentId is a required field`),{statusCode:400})
        }
        const updateData = req?.body
        if(!updateData){
            throw Object.assign(new Error(`fields are required`),{statusCode:400})
        }
        const shipment = await updateShipmentById(shipmentId,updateData)

        res.status(200).json(shipment)
    }
    catch(err){
        res.status(err.statusCode).json(err.stack)
    }
}

export async function deleteShipment(req,res){
    try{
        const shipmentId = req?.query?.id
        if(!shipmentId){
            throw Object.assign(new Error(`shipmentId is a required field`),{statusCode:400})
        }
        const shipment = await deleteShipmentById(shipmentId)
        res.status(200).json(shipment)
    }
    catch(err){
        res.status(err.statusCode).json(err.stack)
    }
}

