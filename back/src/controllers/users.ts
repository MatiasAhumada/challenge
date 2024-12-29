import { Request, Response } from "express";
import { loginUserSV, registerUserSV } from "../services/usersService";
import { Error } from "mongoose";

export const registerUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({ message: "email and password are required" });
  }
  try {
    const user = await registerUserSV(req.body);
    res.status(201).json(user);
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).json(error.message);
    } else {
      
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({ message: "email and password are required" });
  }
  try {
    const user = await loginUserSV(req.body);
    res.status(200).json(user);
  } catch (error) {
    if (error instanceof Error) {
      // Manejo de errores controlados
      // res.status(error.message).json({ message: error.message });
      console.log(error.message);
    } else {
      // Manejo de errores inesperados
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
};
