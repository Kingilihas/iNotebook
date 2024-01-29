const mongoose=require('mongoose')
const mongoUri="mongodb://0.0.0.0:27017/inotebook"

const connectToMongo= async ()=>{
    try{
       await mongoose.connect(mongoUri)
        console.log('Connected to MongoDB')

    }catch(err){
        console.log('Failed to connect to MongoDB',err)
    }
   
}

module.exports=connectToMongo