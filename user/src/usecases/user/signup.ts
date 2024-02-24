import { userRepositories } from "../../database/mongoDB"
import { userController } from "../../handlers/controllers"

export default (dependencies:any)=>{
    const{userRepositories:{userSignupRepo}}=dependencies
    const interactor=async(
        Credential:{
            name:string,
            email:string,
            password?:string
        }
    )=>{
        return await userSignupRepo(Credential)
    }
    return {interactor}
}