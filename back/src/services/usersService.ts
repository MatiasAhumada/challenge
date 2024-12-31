import { Request, Response } from "express";
import Users from "../config/model/usersModel";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/envs";
import userDto, { userResponseDTO } from "../dto/usersDTO";
import bcrypt from "bcryptjs";
import { Error } from "mongoose";
import { AppError } from "../middleware/errorClass";

export const registerUserSV = async (user: userDto): Promise<userResponseDTO> => {
  try {
    const userExist = await Users.findOne({ email: user.email });
    if (userExist) {
      throw new AppError("User already exists", 404);
    }
    const newUser = await Users.create(user);
    if (!newUser) {
      throw new AppError("Failed to create user", 400);
    }
    const token = jwt.sign({ id: newUser._id }, String(JWT_SECRET), { expiresIn: "1d" });
    if (!token) {
      throw new AppError("Failed to create token", 401);
    }
    return { token: token };
  } catch (error) {
    throw error;
  }
};

export const loginUserSV = async (user: userDto): Promise<userResponseDTO> => {
  try {
    const userExist = await Users.findOne({ email: user.email });
    if (!userExist) {
      throw new AppError("User not exists", 400);
    }
    const isMatch = await bcrypt.compare(user.password, userExist.password);
    if (!isMatch) {
      throw new AppError("Invalid Password", 404);
    }
    const token = jwt.sign({ id: userExist._id }, String(JWT_SECRET), { expiresIn: "1d" });
    if (!token) {
      throw new AppError("Failed to create token", 401);
    }
    return { token: token };
  } catch (error) {
    throw new AppError("Failed login", 500);
  }
};
export const usersSV = async (): Promise<userDto[]> => {
  try {
    const users = await Users.find();
    if (!users || users.length === 0) {
      throw new AppError("Failed to retrieve users", 400);
    }
    return users;
  } catch (error) {
    throw new AppError("Internal Server Error", 500);
  }
};
