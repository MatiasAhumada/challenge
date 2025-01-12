import { Request, Response } from 'express';
import Task from '../model/task.model';

export const createTask = async (req: Request, res: Response) => {
  try {
    const task = await Task.create(req.body);
    return res.status(201).json(task);
  } catch (error) {
    return res.status(400).json({ error: (error as Error).message });
  }
};
