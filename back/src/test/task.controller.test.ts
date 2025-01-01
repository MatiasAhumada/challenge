import mongoose from "mongoose";
import { createTask } from "./controller/task.controller";
import Task from "./model/task.model";
import { Request, Response } from "express";
import { MongoMemoryServer } from "mongodb-memory-server";

describe("Task Controller - Create Task", () => {
  let mongoServer: MongoMemoryServer;

  beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    const uri = mongoServer.getUri();
    await mongoose.connect(uri);
  });

  afterEach(async () => {
    await Task.deleteMany({}); // Limpia la colección después de cada prueba
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
  });

  it("should create a task and return the correct response", async () => {
    const req = { body: { title: "Test Task", description: "Test Description" } } as Request;

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;

    await createTask(req, res);

    const savedTask = await Task.findOne({ title: "Test Task" });

    expect(savedTask).not.toBeNull();
    expect(savedTask?.description).toBe("Test Description");
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ title: "Test Task", id: expect.any(String) }));
  });
});
