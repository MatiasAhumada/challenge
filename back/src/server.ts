import express from "express";
import cors from "cors";
import router from "./routes";
import morgan from "morgan";
import { configAuth0 } from "./config/autho";
import { auth } from "express-openid-connect";
import { MiddleError } from "./middleware/MiddleError";

const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(auth(configAuth0));
server.use(cors());
server.use(router);
server.use(MiddleError);

export default server;
