import { Kafka, Producer, Consumer } from "kafkajs";
import * as dependencie from "../../config/dependencies"
import { Console } from "console";
export const runconsumer =async()=>{
    const {productusecases:{createproduct}} = dependencie
    try{
        const kafka = new Kafka({
            clientId: "product-service",
            brokers: ["localhost:29092"]
        })
        const consumer:Consumer = kafka.consumer({
            groupId: "product-service-kafka-group"
        })
         console.log("dfksfkjjfbjbkjsbjbsdbhusvubih")
        await consumer.connect()
        await consumer.subscribe({
            topic: 'to-product',
            fromBeginning: true
        })
        
        await consumer.run({
            eachMessage: async ({message}) => {
                const {key, value} = message;
                const subscriberMethod = String(key)
                const subscriberData = JSON.parse(String(value))
                console.log(subscriberMethod);
                console.log(subscriberData);
                const data=await createproduct(dependencie).interactor(subscriberData)
                console.log(data);
                console.log("heaven;y sprirt")
                
            }
            

        })
      
    }catch(error:any){
        console.log(error.message)
    }
}