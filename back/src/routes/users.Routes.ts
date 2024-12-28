import { Router } from "express";
import { Request, Response } from "express";

const usRT = Router();

usRT.post("/register", (req: Request, res: Response) => {

});

usRT.post("/login", (req: Request, res: Response) => {

});

 usRT.get("/logout", (req, res) => {
   
 });

usRT.get("/profile", (req, res) => {
  if (req.oidc?.isAuthenticated()) {
    res.send(req.oidc.user);
  } else {
    res.send("Logout");
  }
});
export default usRT;
