import express from "express"
import cors from "cors"
import router from "./routes"
import morgan from "morgan"

const server = express()

server.use(morgan("dev"))
server.use(express.json())
server.use(cors())
server.use(router)

export default server