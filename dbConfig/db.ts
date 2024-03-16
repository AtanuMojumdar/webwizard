import mongoose from "mongoose";

export async function connectDB (){
    try{
        await mongoose.connect(process.env.MONGO_URI!);
        const connection = mongoose.connection;
        connection.on('connected',()=>{
            console.log('MongoDB connected!')
        })

        connection.on('error',(err)=>{
            console.log('Error occured while connecting to mongoDB',err);
            process.exit()
        })
    }
    catch(err){
        console.log(err)
    }
}