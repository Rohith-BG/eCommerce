import partner from "../models/partnerModel.js"

export async function create(partnerObj){
    try{
        const newPartner = await partner.create(partnerObj);
        if(!newPartner){
            throw new Error("Error in creating the user at service level");
        }
        return newPartner;
    }
    catch(err){
        throw(err);
    }
}

export async function findPartner(partnerId){
    try{
        const partnerData= await partner.findById(partnerId);
        if(!partnerData){
            throw new Error('Parnter with that Id is not found');
        }
        return partnerData;
    }
    catch(err){
        throw err;
    }
}

export async function update(partnerId,updateData){
    try{
        // check for the existence partner with that id
        const existingPartner = await partner.findById(partnerId);
        if(!existingPartner){
            throw new Error(`partner with this Id doesnot exists`);
        }
        const updatedPartner = await partner.findByIdAndUpdate(partnerId,updateData,{new:true});
        if(!updatedPartner){
            throw new Error(`Cannot update the user`);
        }
        return updatedPartner;
    }
    catch(err){
        throw err;
    }
}

export async function deleteThePartner(partnerId){
    try{
        const deletedPartner = await partner.findByIdAndDelete(partnerId);
        if(!deletedPartner){
            throw new Error('Partner deletion failed');
        }
        return deletedUser;
    }
    catch(err){
        throw err;
    }
}


