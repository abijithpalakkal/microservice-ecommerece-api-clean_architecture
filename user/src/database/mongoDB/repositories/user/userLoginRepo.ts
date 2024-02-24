import { User } from "../../models/user"
import { UserEntity } from "../../../../entities";

export const userloginrepo=async (email:string):Promise<UserEntity | null> =>{
    try{
        let data = await User.findOne({email:email})
        if(!data){
            throw new Error("No such user found")
        }
        return data as UserEntity
    
    }catch(error:any){
       throw new Error(error?.message)
    }
   
}
