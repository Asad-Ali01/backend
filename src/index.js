import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/dbConnection.js";
import express from 'express';
import dotenv from 'dotenv'
dotenv.config({path:'./.env'})
await connectDB()








































/*

const app = express();
( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log("db is connected");
        mongoose.connection.on("error",() => {
            console.log("App failed to talk with db");
            process.exit(1);   //terminates the nodejs global object which stop app
        })
        const server = app.listen(process.env.PORT,()=>{
            console.log('Server is running');
        })
        server.on('error',()=>{
            console.log("server failed to start");
            process.exit(1);
        })
    } catch (error) {
        console.error("ERROR:", error );
        process.exit(1);
    }
})()
    */