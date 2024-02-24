import mongoose from "mongoose"
import { ProductEntity } from "../../../../entities"; 
import { Product } from "../../model/product";

export const addproduct=async(data:ProductEntity):Promise< ProductEntity | null> =>{
    console.log("u here")
    try{
        const newProduct = new Product(data);
       
        newProduct.save()
        return newProduct as ProductEntity
    }catch(error:any){
        console.log(error?.message,"**************")
        return null
    }
}