import { create, deleteThePartner, findPartner, update} from "../services/partnerService.js";

export async function createPartner(req,res){
    try{
        const partnerObj = req.body;

        const partner = await create(partnerObj);

        res.status(201).json(partner);
        
    }
    catch(err){
        res.status(400).json(err.stack);
    }
}

export async function getPartner(req,res){
    try{
        const partnerId = req.query.id;
         
        const partnerDetails = await findPartner(partnerId);

       return res.status(200).json(partnerDetails);
    }
    catch(err){
        res.status(404).json(err.stack);
    }
}

export async function updatePartner(req,res){
    const partnerId = req.query.id;
    const updateData = req.body;
    try{
        const updatedPartner = await update(partnerId,updateData);
        res.status(200).json(updatedPartner);
    }
    catch(err){
        res.status(400).json(err.stack);
    }
}

export async function deletePartner (req,res){
    const partnerId = req.query.id;

    try{
        const deletedPartner = await deleteThePartner(partnerId);
        res.status(200).json(deletedPartner);
    }
    catch(err){
        res.status(400).json(err.stack);
    }
}    