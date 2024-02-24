import { Router } from "express";
import { cartController } from "../handlers/controllers";
import * as dependencies from "../config/dependencies"
const router: Router = Router();

const {
    addToCartController,
} = cartController(dependencies)

router.route('/add-to-cart')
    .post(addToCartController);

    export default router
