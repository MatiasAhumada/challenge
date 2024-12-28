import { Router } from "express";
import tdRoutes from "./todos.Routes";
import usRT from "./users.Routes";

const router = Router();

router.use("/api", tdRoutes);
router.use("/users", usRT);
 router.get("/", (req, res) => {
     res.redirect('/users/profile');
 });

export default router;
