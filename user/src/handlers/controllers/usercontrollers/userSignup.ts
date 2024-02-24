import { NextFunction, Request, Response } from "express";



export default (dependencies: any) => {
    const {userUseCases: {signup}} = dependencies;
    
    const createUser = async(req: Request, res: Response, next: NextFunction): Promise<void> => {

        try {
            const credentials = req.body
            
            
            
            const user = await signup(dependencies).interactor(credentials)
            
    
           
            res.status(201).json({success: true , data: user, message: "user Created"});
            
        } catch (error: any) {
            next(error);
        }
    }
    return createUser;
}