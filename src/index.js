import "dotenv/config"
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/dbConnection.js";
import express from 'express';
import { app } from "./app.js";


connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000,() => {
        console.log(`Server is running at port : ${process.env.PORT}`);
    });
    app.on("error",(err) => {
        console.log("App error: ",err);
        throw err;
    })
}) 
.catch((err) => {
    console.log('MongoDB connection failed !!!',err);
})








































