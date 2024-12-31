import { NextFunction, Request, Response } from "express";
import { JWT_SECRET } from "../config/envs";
import jwt from "jsonwebtoken";

const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401).json({ message: "Authorization token missing or invalid" });
  }
  const token = authHeader?.split(" ")[1];
  try {
    jwt.verify(String(token), String(JWT_SECRET));

    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized", error: error instanceof Error ? error.message : "Invalid token" });
  }
};
export default authMiddleware;
