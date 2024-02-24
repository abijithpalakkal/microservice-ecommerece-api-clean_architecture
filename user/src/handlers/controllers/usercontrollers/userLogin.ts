import { error } from "console";
import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken'

export default (dependencie:any)=>{
    const {userUseCases:{login}} = dependencie;
    const loginUser=async (req:Request,res:Response,next:NextFunction):Promise<void>=>{
        const data=await login(dependencie).interactor(req.body.email)
        if(!data){
            throw new Error("no such email is found")
        }
        if(req.body.password==data.password){
            console.log(data,"*********************")
            function generatetoken(payload:{_id: string,email: string, isAdmin: boolean, isBlocked: boolean}){
                return jwt.sign(payload,"qwertyuio123456789",{expiresIn: 60*60*24})
            }
            const {_id,email,isAdmin,isBlocked} = data
            const token=generatetoken({
                _id,
                email,
                isAdmin,
                isBlocked

            })
            res.cookie("auth",token,{maxAge: 1000*60*60*24,
                httpOnly: true})

            res.status(201).json("user sucessfully logged in")
        }else{
            throw new Error("wrong password")
        }

    }
    return loginUser

}