import { Router } from "express";
import { Request, Response } from "express";

import { getUsers, loginUser, registerUSAuth0, registerUser } from "../controllers/users";
import authMiddleware from "../middleware/authBearer";

const usRT = Router();

usRT.post("/register", registerUser);

usRT.post("/login", loginUser);

usRT.get("/logout", (req, res) => {
  try {
    res.status(200).send("Logout");
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
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
