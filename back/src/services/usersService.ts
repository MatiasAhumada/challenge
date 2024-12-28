import { Request, Response } from "express";
import Users from "../config/model/usersModel";
import jwt from "jsonwebtoken"
import { JWT_SECRET } from "../config/envs";
import userDto from "../dto/usersDTO";

export const registerUserSV = async (user: userDto) => {
  try {
    const userExist= await Users.findOne({ email: user.email });
    if (userExist) {
      throw new Error("User already exists");
    }
    const newUser = await Users.create(user);
    const token= jwt.sign({id: newUser._id}, String(JWT_SECRET), {expiresIn: "1d"});

    return {newUser, token};
  } catch (error) {
    throw error;
  }
};
