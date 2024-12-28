import { NextFunction, Request, Response } from "express";
import { consultDuplicate } from "../services/todosServise";

const validateData = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { title } = req.body;
  if (!title) {
    res.status(400).json({ message: "title is required" });
    return;
  }
  if (typeof title !== "string") {
    res.status(400).json({ message: "title is not string" });
    return;
  }
  const existingTodo = await consultDuplicate(title);
  if (existingTodo) {
    res.status(400).json({ message: "A todo with this title already exists" });
    return;   
}
  next();
};

export default validateData;
