import { Router } from "express";
import { deleteTodos, getTodos, getTodosID, postTodos, putTodos } from "../controllers/todosControler";
import validateData from "../middleware/postMiddleware";

const tdRoutes= Router();
/*
@swagger


*/
tdRoutes.get("/todos",getTodos)
/*
@swagger


*/
tdRoutes.get("/todos/:id",getTodosID)
/*
@swagger


*/
tdRoutes.post("/todos",validateData,postTodos)
/*
@swagger


*/
tdRoutes.put("/todos/:id",putTodos)
/*
@swagger


*/
tdRoutes.delete("/todos/:id",deleteTodos)


export default tdRoutes;