import Category from "../models/categoryModel.js";



export async function createCategoryService(categoryObj){
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

export async function getAllCategoryService(){
    try{
        const categories = await Category.find().populate('createdBy','name -_id');
        

        if(!categories){
            throw new Error('No existing categories');
        }
        return categories;
    }
    catch(err){
        throw err;
    }
}

export async function updateCategoryService(categoryId,updateDetails){
    try{
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


/// Have to handle this as the product has reference on the category 
export async function deleteCategoryService(categoryId){
    try{
        const deletedCategory = await Category.findByIdAndDelete(categoryId);

        if(!deletedCategory){
            throw new Error ('Failed to delete');
        }

    }
    catch(err){
        console.log(err);
        throw err;
    }
}