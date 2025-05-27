import { createPartner , deletePartner, findPartner, updatePartner} from "../services/partnerService.js";

export async function signPartner(req,res){
    try{
        const partnerObj = req.body;

        const partner = await createPartner(partnerObj);

        res.status(201).json({'PartnerCreated':partner});
        
    }
    catch(err){
        res.status(400).json(err.message+'Try again including the required field');
    }
}

export async function getPartner(req,res){
    try{
        const partnerId = req.params.id;
         
        const partnerDetails = await findPartner(partnerId);


        return res.status(200).json({"Partner":partnerDetails});
    }
    catch(err){
        res.status(404).json({'messaage':'Partner with that Id is not found'});
    }
}

export async function Update(req,res){
    const partnerId = req.params.id;
    const updateData = req.body;
    try{
        const UpdatedPartner = await updatePartner(partnerId,updateData);
        res.status(200).json({'UpdatedDetails':UpdatedPartner});
    }
    catch(err){
        res.status(500).json({'Error message':'Updation failed'});
    }
}

export async function deleteAccount (req,res){
    const partnerId = req.params.id;

    try{
        const deletedPartner = await deletePartner(partnerId);
        res.json(deletedPartner);
        // res.status(200).json({'message':'Partner Account Deleted Successfully'})
    }
    catch(err){
        res.status(500).json({'Error message':'Failed to Delete'});
    }
}    