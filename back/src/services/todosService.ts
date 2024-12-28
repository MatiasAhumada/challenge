import { todo } from "node:test";
import Todos from "../config/model/todosModel";
import { TodosDTO, TodosResponse } from "../dto/todosDto";

export const getTodosSv = async (): Promise<TodosDTO[]> => {
  const todos: TodosDTO[] = await Todos.find();
  return todos;
};

export const getTodosSVID = async (id: string): Promise<TodosDTO | null> => {
  const todo: TodosDTO | null = await Todos.findById(id);
  return todo;
};

export const postTodosSV = async (todo: TodosDTO): Promise<TodosResponse | null> => {
  const newTodo = await Todos.create(todo);
  if (!newTodo || !newTodo.title) {
    return null;
  }
  return {
    title: newTodo.title,
    id: newTodo._id.toString(),
  };
};

export const putTodosSV = async (id: string, todoput: TodosDTO) => {
  const todoPut = await Todos.findByIdAndUpdate(id, todoput);
  if (!todoPut) {
    return null;
  }
  const newTodoPut = await getTodosSVID(id);

  return newTodoPut;
};

export const deleteTodosSV = async (id: string) => {
  const todo = await Todos.findByIdAndDelete(id);
  if (!todo) {
    return null;
  }
  return todo;
};

export const consultDuplicate = async (title: string) => {
  const existingTodo = await Todos.findOne({ title });
  return existingTodo;
}
