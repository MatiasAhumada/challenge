import { Request, Response } from "express";
import { loginUserSV, registerUserSV, usersSV } from "../services/usersService";
import { Error } from "mongoose";
import userDto from "../dto/usersDTO";

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
export const registerUSAuth0 = async (req: any, res: Response) => {
  if (!req) {
    res.status(400).json({ message: "data not exist" });
  }
  try {
    const user = await registerUserSV({ email: req.name, password: req.sub });
    res.status(201).json(user);
  } catch (error) {
    if (error instanceof Error) {
      try {
        const token = await loginUserSV({ email: req.name, password: req.sub });
        res.status(200).json(token);
      } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
      }
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
    res.status(201).json(user);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
};
export const getUsers = async (req: Request, res: Response) => {
  try {
    const users: userDto[]= await usersSV();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
