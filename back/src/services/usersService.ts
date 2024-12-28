import { Request, Response } from "express";
import Users from "../config/model/usersModel";

export const registerUser = async (user: userDto) => {
  try {
    const newUser = await Users.create(user);
    return newUser;
  } catch (error) {
    throw error;
  }
};
