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

export const postTodosSV = async (todo: TodosDTO): Promise<TodosResponse|null> => {
  const newTodo = await Todos.create(todo);
  if (!newTodo || !newTodo.title) {
    return null; 
  }
  return {
    title: newTodo.title,
    id: newTodo._id.toString(),
  };
};

export const putTodosSV = async (id: string) => {};

export const deleteTodosSV = async (id: string) => {};
