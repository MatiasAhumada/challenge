import mongoose from "mongoose";
import { DB_URL } from "./envs";

const connect=async()=>mongoose.connect(String(DB_URL));

export default connect;