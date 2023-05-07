import express from "express";
import serverless from "serverless-http";

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hello, world!" });
});

export default app;

export const handler = serverless(app);
