
import signup from './userSignup'
import login  from "./userLogin"
import addproduct from './addproduct'

export default (dependencies: any) => {
    return {
        signupController: signup(dependencies),
        loginController: login(dependencies),
        addproduct:addproduct()
    }
}