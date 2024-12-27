import { Router } from "express";
import { deleteTodos, getTodos, getTodosID, postTodos, putTodos } from "../controllers/todosControler";

const tdRoutes= Router();

tdRoutes.get("/todos",getTodos)
tdRoutes.get("/todos/:id",getTodosID)
tdRoutes.post("/todos",postTodos)
tdRoutes.put("/todos/:id",putTodos)
tdRoutes.delete("/todos/:id",deleteTodos)

export default tdRoutes;