import { Router } from "express";
import { deleteTodos, getTodos, getTodosID, postTodos, putTodos } from "../controllers/todosControler";
const tdRoutes= Router();

tdRoutes.get("/api/todos",getTodos)
tdRoutes.get("/api/todos/:id",getTodosID)
tdRoutes.post("/api/todos",postTodos)
tdRoutes.put("/api/todos/:id",putTodos)
tdRoutes.delete("/api/todos/:id",deleteTodos)

export default tdRoutes;