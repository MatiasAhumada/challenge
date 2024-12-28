import { Router } from "express";
import { Request, Response } from "express";

import { loginUser, registerUser } from "../controllers/users";

const usRT = Router();

usRT.post("/register", registerUser);

usRT.get("/login", loginUser);

usRT.get("/logout", (req, res) => {});

usRT.get("/profile", (req, res) => {
  if (req.oidc?.isAuthenticated()) {
    res.send(req.oidc.user);
  } else {
    res.send("Logout");
  }
});
export default usRT;
