import Shipment from "../models/shipmentModel.js";

export async function insertShipment(shipmentData){
    try{
        const shipment = await Shipment.create(shipmentData)
        if(!shipment){
            throw Object.assign(new Error(`failed to create shipment`))
        }
        return shipment
    }
    catch(err){
        throw err
    }
}

export async function getShipmentById(shipmentId){
    try{
        const shipment = await Shipment.findById(shipmentId)
        if(!shipment){
            throw Object.assign(new Error(`shipmentId not found`),{statusCode:404})
        }
        return shipment 
    }
    catch(err){
        throw err
    }
}

export async function updateShipmentById(shipmentId,updateData){
    try{
        const shipment = await Shipment.findByIdAndUpdate(shipmentId,updateData)
        if(!shipment){
            throw Object.assign(new Error(`shipmentId not found`),{statusCode:404})
        }
        return shipment
    }
    catch(err){
        throw err
    }
}

export async function deleteShipmentById(shipmentId){
    try{
        const shipment = await Shipment.findByIdAndDelete(shipmentId)

        if(!shipmentId){
            throw Object.assign(new Error(`shipmentId not found`),{statusCode:404})
        }
        return shipment
    }
    catch(err){
        throw err
    }
}