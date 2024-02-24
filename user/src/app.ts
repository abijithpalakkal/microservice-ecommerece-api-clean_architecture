import express,{Response,Request,Application,NextFunction} from "express"
import userRouter from "./routes/userRoute"
import {database} from "./database"

let app:Application = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get("/",(req:Request,res:Response)=>{
    res.status(200).json("sucesafasefefs")
})
app.use(userRouter)
app.listen(3000,()=>{
    console.log("running on 3000")
})
database()


