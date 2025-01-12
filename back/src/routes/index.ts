import { Router } from "express";
import tdRoutes from "./todos.Routes";
import usRT from "./users.Routes";
import swaggerUI from "swagger-ui-express";
import config from "../config/swagger";
import fs from "fs";
import YAML from "yaml";

const router = Router();

const file = fs.readFileSync("./src/config/swagger.yml", "utf8");

const swDoc = YAML.parse(file);

router.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swDoc));

router.use("/api", tdRoutes);

router.use("/users", usRT);

router.get("/", (req, res) => {
  res.redirect("/users/profile");
});

export default router;
