import TodosDTO from "../dto/todosDto";
import { getTodosSv } from "../services/todosServise";
import { Request, Response } from "express";

export const getTodos = async (req: Request, res: Response) => {
  try {
    const todos: TodosDTO[] = await getTodosSv();
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
export const getTodosID = async (req: Request, res: Response) => {};
export const postTodos = async (req: Request, res: Response) => {};
export const putTodos = async (req: Request, res: Response) => {};
export const deleteTodos = async (req: Request, res: Response) => {};
