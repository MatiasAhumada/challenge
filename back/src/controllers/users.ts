import { Request, Response } from "express";
import {  registerUserSV } from "../services/usersService";

export const registerUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({ message: "email and password are required" });
  }
  try {
    const user = await registerUserSV(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

