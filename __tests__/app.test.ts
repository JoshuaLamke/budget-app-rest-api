import request from "supertest";

import app from "../src/app";

describe("Test app.ts", () => {
  test("Base Route", async () => {
    const res = await request(app).get("/");
    expect(res.body).toEqual({ message: 'Hello, world!' });
  });
});