import { Router } from "express";
import * as dependencies from "../config/dependencies"
import { userController } from "../handlers/controllers";

const router:Router = Router()
const {
    signupController,
    loginController,
    addproduct
} = userController(dependencies)

router.route("/signup").post(signupController)
router.route("/login").post(loginController)
router.route("/add_product").post(addproduct)

export default router