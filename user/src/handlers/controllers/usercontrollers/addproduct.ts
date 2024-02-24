import express,{Express,Response,Request,NextFunction} from "express"
import { productCreatedProducer } from "../../../kafka/producer/productCreatedProducer"
export default()=>{
  const addproduct = async(req:Request,res:Response) =>{
    try{
        const data=req.body
        console.log("successfully reached here")
        await productCreatedProducer(data)
    }catch(error:any){
        throw new Error("error in user server for adding products")
    }
       

    }
    return addproduct
}