import { Request, Response } from "express";
import Users from "../config/model/usersModel";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/envs";
import userDto from "../dto/usersDTO";
import bcrypt from "bcryptjs";
import { Error } from "mongoose";

export const registerUserSV = async (user: userDto) => {
  try {
    const userExist = await Users.findOne({ email: user.email });
    if (userExist) {
      const error: any = new Error("User already exists");
      error.statusCode = 404;
      throw error;
    }
    const newUser = await Users.create(user);
    const token = jwt.sign({ id: newUser._id }, String(JWT_SECRET), { expiresIn: "1d" });

    return token;
  } catch (error) {
    throw error;
  }
};

export const loginUserSV = async (user: userDto) => {
  try {
    const userExist = await Users.findOne({ email: user.email });
    if (!userExist) {
      const error: any = new Error("User not found");
      error.statusCode = 404;
      throw error;
    }
    const isMatch = await bcrypt.compare(user.password, userExist.password);
    if (!isMatch) {
      const error: any = new Error("Invalid credentials");
      error.statusCode = 404;
      throw error;
    }
    const token = jwt.sign({ id: userExist._id }, String(JWT_SECRET), { expiresIn: "1d" });
    return token;
  } catch (error) {
    throw error;
  }
};
