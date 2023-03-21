const mongoose = require('mongoose');
var colors = require('colors');
const { MongoClient, ServerApiVersion } = require("mongodb");
const connectDB=async()=>{

   try{
         const conn= await mongoose.connect('mongodb+srv://mernchatApp:xZy1If8d8lQtX4FX@cluster0.8hft5n9.mongodb.net/?retryWrites=true&w=majority',{
            useNewUrlParser: true,
            useUnifiedTopology: true
         });
         console.log('mongodb connected:'.cyan)

   } catch(error)
   {
     console.log(error.message);
     process.exit();
   }


}

module.exports= connectDB;