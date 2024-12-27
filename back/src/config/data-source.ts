import mongoose from "mongoose";
import { DB_URL } from "./envs";

mongoose.connect(String(DB_URL));

const DB = mongoose.connection;
DB.on("CONECTED", () => console.log("DB connected"));
DB.on("ERROR", () => console.log("DB connection error"));
DB.on("DISCONECTED", () => console.log("DB disconnected"));

