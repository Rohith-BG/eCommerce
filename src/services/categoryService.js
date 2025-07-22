import Category from "../models/categoryModel.js";



export async function insertCategory(categoryData){
    try{
        const category = await Category.create(categoryData);
        if(!category){
            throw new Error("Error in creating a new Category");
        }
        return category;
    }
    catch(err){
        throw err;
    }
} 

export async function getCategories(){
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

export async function updateCategoryById(categoryId,updateDetails){
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


export async function deleteCategoryById(categoryId){
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