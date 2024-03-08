import express from "express";
import mongoose from "mongoose";
import { PORT, mongoDBURL } from "./config.js";

const app = express();

//mongoose
export const connectDB = async () => {
    try {
         mongoose.set('strictQuery', false);

        await mongoose.connect(mongoDBURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB Connected...');

        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        })
    } catch (err) {
        console.error(err.message);
        // make the process fail
        process.exit(1);
    }
}




//sql database
//...

