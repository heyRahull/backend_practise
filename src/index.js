// require('dotenv').config({ path: './.env' });
import dotenv from "dotenv";
import connectDB from "./db/index.js";

// Force Node.js to use Google and Cloudflare DNS resolvers to bypass the Windows bug
import dns from "node:dns/promises";
dns.setServers(["1.1.1.1", "8.8.8.8"]);

dotenv.config({path: './.env'})

connectDB();

// ;(async()=>{
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//         console.log("Connected to DB");
//     }catch(err){
//         console.log("Error Connecting to DB : ",err)
//     }
// })()
