import { Router } from "express";
import { Request, Response } from "express";

import { getUsers, loginUser, registerUSAuth0, registerUser } from "../controllers/users";

const usRT = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *   Users:
 *     type: object
 *     properties:
 *       email:
 *         type: string
 *         format: string
 *         example: ejemplo@ejemplo.com
 *       password:
 *         type: string
 *         example: fehguy123
 */

/**
 * @swagger
 * tags:
 *  name: Users
 *  description: User management
 */

/**
 * @swagger
 *  /users/register:
 *  post:
 *    summary: Register a new user
 *    tags: [Users]
 *    description: Register a new user
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Users'
 *    responses:
 *      200:
 *        description: User registered
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                token:
 *                  type: string
 *      400:
 *        description: User already exists
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                error:
 *                  type: string
 *      500:
 *        description: Server error
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                error:
 *                  type: string
 *
 */
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
