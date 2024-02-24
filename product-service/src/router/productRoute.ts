import express,{ Router, Request, Response } from "express"
import { adminauth } from "../handlers/middleware/authMiddleware";

const router:Router = Router();
router.route("/add-product").get()

export default router 
