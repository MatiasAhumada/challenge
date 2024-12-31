import { Router } from "express";
import { Request, Response } from "express";

import { getUsers, loginUser, registerUSAuth0, registerUser } from "../controllers/users";

const usRT = Router();


usRT.post("/register", registerUser);

usRT.get("/login", loginUser);

usRT.get("/logout", (req, res) => {
  res.status(200).send("Logout");
});
usRT.get("/users", getUsers);

usRT.get("/profile", (req, res) => {
  if (req.oidc?.isAuthenticated()) {
    registerUSAuth0(req.oidc.user, res);
  } else {
    res.send("Logout");
  }
});
export default usRT;
