import { Request, Response, NextFunction } from "express";
import { AppError } from "./errorClass";

export const MiddleError = (err: AppError | Error, req: Request, res: Response, next: NextFunction) => {
  const statusCode = err instanceof AppError ? err.statusCode : 500;
  const message = err instanceof AppError ? err.message : "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    message,
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
  });
};
