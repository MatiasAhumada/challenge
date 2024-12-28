import { Router } from "express";
import { Request, Response } from "express";

const usRT = Router();

// usRT.get("/logout", (req, res) => {
//   res.oidc.logout({ returnTo: "http://localhost:3000/users/test" }); // Cambia la URL según tu proyecto
// });
// usRT.get("/test", (req, res) => {
//   if (req.oidc?.isAuthenticated()) {
//     res.send("User is login");
//   } else {
//     res.send("User is logout");
//   }
// });

usRT.get("/profile", (req, res) => {
  if (req.oidc?.isAuthenticated()) {
    res.send(req.oidc.user);
  } else {
    res.send("Logout");
  }
});
export default usRT;
