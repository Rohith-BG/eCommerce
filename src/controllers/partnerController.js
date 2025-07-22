import { insertPartner, deletePartnerById, getPartnerById , updatePartnerById } from "../services/partnerService.js";

export async function createPartner(req,res){
    try{
        const partnerObj = req?.body;

        const partner = await insertPartner(partnerObj);

        res.status(201).json(partner);
        
    }
    catch(err){
        res.status(400).json(err.stack);
    }
}

export async function getPartner(req,res){
    try{
        const partnerId = req?.query?.id;
         
        const partner = await getPartnerById(partnerId);

        res.status(200).json(partner);
    }
    catch(err){
        res.status(404).json(err.stack);
    }
}

export async function updatePartner(req,res){
    try{
        const partnerId = req?.query?.id;
        console.log(partnerId)
        console.log(typeof(partnerId))

        if(!partnerId){
            throw Object.assign(new Error("partner id is mandtory"),{statusCode:400} )
        }
        const updateData = req?.body;
        const partner = await updatePartnerById(partnerId,updateData);
        res.status(200).json(partner);
    }
    catch(err){
        console.log(`IN catch block`,err.code)
        res.status(err.statusCode).json(err.stack);
    }
}

export async function deletePartner (req,res){
    try{
        const partnerId = req?.query?.id;
        const partner = await deletePartnerById(partnerId);
        res.status(200).json(partner);
    }
    catch(err){
        res.status(400).json(err.stack);
    }
}    