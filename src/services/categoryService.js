import Category from "../models/categoryModel.js";



export async function create(categoryObj){
    try{
        const createdCategory = await Category.create(categoryObj);
        if(!createdCategory){
            throw new Error("Error in creating a new Category");
        }
        return createdCategory;
    }
    catch(err){
        throw err;
    }
} 

export async function getAll(){
    try{
        const categories = await Category.find();
        
        if(!categories){
            throw new Error('No existing categories');
        }
        return categories;
    }
    catch(err){
        throw err;
    }
}

export async function update(categoryId,updateDetails){
    try{
        //checking for the currentData in DB with the client sent data
    
        const currentData = await Category.findById(categoryId);

        if(currentData===updateDetails){
            return currentData;
        }

        const updatedCategory = await Category.findByIdAndUpdate(categoryId,updateDetails);

        if(!updatedCategory){
            throw new Error('Updation failed');
        }
        return updatedCategory;
    }
    catch(err){
        throw err;
    }
}


export async function deletion(categoryId){
    try{
        const deletedCategory = await Category.findByIdAndDelete(categoryId);

        if(!deletedCategory){
            throw new Error ('Failed to delete');
        }

        return deletedCategory;

    }
    catch(err){
        throw err;
    }
}