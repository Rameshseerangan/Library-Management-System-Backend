// connect data base

import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URL);

        console.log(`MongoDB Connected:`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}   

export default connectDB