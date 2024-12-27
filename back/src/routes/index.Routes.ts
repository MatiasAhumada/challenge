import { Router } from "express";
import tdRoutes from "./todos.Routes";

const router = Router();

router.use("/", tdRoutes);

export default router;
