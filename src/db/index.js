import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n MongoDB Connected successfully! DB Host: ${connectionInstance.connection.host}`);
    } catch (err) {
        console.error('Error Connecting to DB:', err);
        // Terminate the active Node.js execution loop cleanly using system process failure states
        process.exit(1); 
    }
};

export default connectDB;