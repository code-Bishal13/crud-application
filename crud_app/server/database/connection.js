const mongoose = require("mongoose");
// const url = process.env.MONGO_URI
const connectDB = async () => {
  try{
  // mongodb connection string
  const con =await mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    // useFindAndModify:false,
    // useCreateIndex:true

  })
  console.log(`mongoDB connnected:${con.connection.host}`)
    }catch(err){
console.log(err)
process.exit(1)
    }
  }
module.exports = connectDB;
