import TodosDTO from "../dto/todosDto";
import { deleteTodosSV, getTodosSv, getTodosSVID, postTodosSV, putTodosSV } from "../services/todosServise";
import { Request, Response } from "express";

export const getTodos = async (req: Request, res: Response) => {
  try {
    const todos: TodosDTO[] = await getTodosSv();
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
export const getTodosID = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ message: "id is required" });
  }
  try {
    const todo = await getTodosSVID(id);
    if (!todo) {
      res.status(404).json({ message: "Todo not found" });
    }
    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const postTodos = async (req: Request, res: Response) => {
  try {
    const newTodo = await postTodosSV(req.body);
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
export const putTodos = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title } = req.body;
  if (!id) {
    res.status(400).json({ message: "id is required" });
  }
  try {
    const todo = await putTodosSV(id, { title });
    if (!todo) {
      res.status(404).json({ message: "Todo not found" });
    }
    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
export const deleteTodos = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ message: "id is required" });
  }
  try {
    const todo = await deleteTodosSV(id);
    if (!todo) {
      res.status(404).json({ message: "Todo not found" });
    }
    res.status(200).json({ message: "Todo deleted" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }

};
