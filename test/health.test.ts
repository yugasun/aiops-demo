import request from "supertest";
import app from "../src/app";

describe("Health API", () => {
  it("GET /health returns 200 with status ok", async () => {
    const res = await request(app).get("/health");
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ status: "ok", version: "1.2.3" });
  });

  it("GET /health version matches package.json", async () => {
    const pkg = require("../package.json");
    const res = await request(app).get("/health");
    expect(res.body.version).toBe(pkg.version);
  });
});
