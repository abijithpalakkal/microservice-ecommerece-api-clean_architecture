import {ObjectId} from "mongoose"
import { Product } from "../../database/mongoDB/model/product"

export default async(
    data: {
        name: string;
        stock: number;
        description: string;
        price: number;
    })=>{
        try{
            const product=new Product({
                name: data.name,
            stock: data.stock,
            description: data.description,
            price: data.price
            })
            await product.save()
        }catch(error:any){
            console.log(error?.message)
        }
    }