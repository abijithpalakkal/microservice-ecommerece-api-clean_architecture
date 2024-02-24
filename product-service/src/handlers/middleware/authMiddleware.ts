import { Request, Response } from "express"
import jwt, { decode } from 'jsonwebtoken'

export const adminauth=(req:Request,res:Response)=>{
    console.log(req.cookies.auth)
    const decoded = jwt.verify(req.cookies.auth,"qwertyuio123456789");
    console.log(decoded)
}