import express,{Application,Express,Request,Response,NextFunction} from "express"
import router from "./router/productRoute"
import cookieParser from 'cookie-parser'
import { runconsumer } from "./kafka/consumers/productConsumer"
import database from "./database/mongoDB/dbconnection"

const app:Application = express()
app.use(express.json())
app.use(cookieParser())
app.get("/",(req,res)=>{
    res.send("its hereykdns")
})
app.use(router)
app.listen(3001,()=>{
    console.log("successfully ruuning")
})
database()
runconsumer()