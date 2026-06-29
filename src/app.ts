import express from "express";
import taskRouter from "./routes/tasks";
import healthRouter from "./routes/health";
import { errorHandler } from "./middleware/error";

const app = express();
app.use(express.json());

app.use(healthRouter);
app.use("/api/tasks", taskRouter);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`task-api listening on port ${PORT}`);
  });
}

export default app;
