import { NextFunction, Request, Response } from "express";
import { loginUserSV, registerUserSV, usersSV } from "../services/usersService";
import { Error } from "mongoose";
import userDto from "../dto/usersDTO";
import { AppError } from "../middleware/errorClass";

export const registerUser = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new AppError("email and password are required", 400);
  }
  try {
    const user = await registerUserSV(req.body);
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};
export const registerUSAuth0 = async (req: any, res: Response, next: NextFunction) => {
  if (!req) {
    throw new AppError("Data not exist", 400);
  }
  try {
    const user = await registerUserSV({ email: req.name, password: req.sub });
    res.status(201).json(user);
  } catch (error) {
    try {
      const token = await loginUserSV({ email: req.name, password: req.sub });
      res.status(201).json(token);
    } catch (error) {
      next(error);
    }
  }
};
export const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({ message: "email and password are required" });
  }
  try {
    const user = await loginUserSV(req.body);
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};
export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users: userDto[] = await usersSV();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};
