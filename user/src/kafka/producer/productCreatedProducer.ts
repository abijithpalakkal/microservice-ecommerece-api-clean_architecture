import { Kafka, Producer, Consumer } from "kafkajs";

export const productCreatedProducer = async(
    
   data:{
        _id: string;
        name: string;
        stock: string;
        description: string;
        price: string;
   }
) =>{
    console.log("dangu")
    const kafka=new Kafka({
        clientId:"product-service",
        brokers: ["localhost:29092"]
    })
    const producer: Producer=kafka.producer()
    try{
        await producer.connect()
        const message=[
            {
                topic:"to-product",
                messages:[{
                    key: 'productCreated',
                    value: JSON.stringify(data)
                }]
    
            }
        ]
        await producer.sendBatch({topicMessages:message})
        console.log("dangu")
    }catch(error:any){
        console.log(error?.message)
    }finally{
        producer.disconnect()
    }
  
}