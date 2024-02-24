import express,{ Application } from "express";
import cookieParser from 'cookie-parser'
import cartrouter from "./routes/cartrouter"
import {dbConnection} from "./database"

const app:Application = express()

app.use(express.json())
app.use(cookieParser())
app.use(cartrouter)
app.listen(3002,()=>{
    console.log("connected to cart service succcesfully")
})
dbConnection()