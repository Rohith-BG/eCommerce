
import product from '../models/productModel.js'


export async function create(productObj){
    try{
        const createdProduct=await product.create(productObj);
        if(!createdProduct){
            throw new Error('Failed to create a Product')
        }
        return createdProduct;
    }
    catch(err){
        throw err;
    }

}

export async function getAll(){
    try{
        const products = await product.find();
        if(!products){
            throw new Error ("No existing products");
        }
        return products;
    }
    catch(err){
        throw err;
    }

}


export async function update(productId,updateDetails){
    try{
        const updatedProduct = await product.findByIdAndUpdate(productId,updateDetails,{new:true});

        if(!updatedProduct){
            throw new Error("Failed to update");
        }
        return updatedProduct;
    }

    catch(err){
        throw err;
    }
}

export async function deleteTheProduct(productId){
    try{
        const deletedProduct = await product.findByIdAndDelete(productId);
        if(!deletedProduct){
            throw new Error ('Failed to delete the product')
        }
        return deletedProduct;
    }
    catch(err){
        throw err;
    }
}
