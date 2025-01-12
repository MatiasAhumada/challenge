import { Router } from "express";
import { deleteTodos, getTodos, getTodosID, postTodos, putTodos } from "../controllers/todosControler";
import authMiddleware from "../middleware/authBearer";

const tdRoutes = Router();

tdRoutes.get("/todos", authMiddleware, getTodos);

tdRoutes.get("/todos/:id", authMiddleware, getTodosID);

tdRoutes.post("/todos", authMiddleware, postTodos);

tdRoutes.put("/todos/:id", authMiddleware, putTodos);

tdRoutes.delete("/todos/:id", authMiddleware, deleteTodos);

export default tdRoutes;
