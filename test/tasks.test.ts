import request from "supertest";
import app from "../src/app";

describe("Tasks API", () => {
  it("GET /api/tasks returns task list", async () => {
    const res = await request(app).get("/api/tasks");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it("POST /api/tasks creates a task", async () => {
    const res = await request(app)
      .post("/api/tasks")
      .send({ title: "New task" });
    expect(res.status).toBe(201);
    expect(res.body.title).toBe("New task");
    expect(res.body.done).toBe(false);
  });
});
