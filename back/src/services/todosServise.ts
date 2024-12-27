import Todos from "../config/model/todosModel";
import TodosDTO from "../dto/todosDto";

export const getTodosSv = async () => {
  const todos: TodosDTO[] = await Todos.find();
  return todos;
};
