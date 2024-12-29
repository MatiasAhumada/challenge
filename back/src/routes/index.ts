import { Router } from "express";
import tdRoutes from "./todos.Routes";
import usRT from "./users.Routes";
import swaggerUI from "swagger-ui-express"
import config from "../config/swagger";
const router = Router();

router.use("/api-docs", swaggerUI.serve,swaggerUI.setup(config))

router.use("/api", tdRoutes);

router.use("/users", usRT);

 router.get("/", (req, res) => {
     res.redirect('/users/profile');
 });
 
export default router;
