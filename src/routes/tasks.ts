import { Router, Request, Response } from "express";

interface Task {
  id: number;
  title: string;
  done: boolean;
}

const tasks: Task[] = [
  { id: 1, title: "Buy groceries", done: false },
  { id: 2, title: "Write tests", done: true },
];

let nextId = 3;

const router = Router();

router.get("/", (_req: Request, res: Response) => {
  res.json(tasks);
});

router.get("/:id", (req: Request, res: Response) => {
  const task = tasks.find((t) => t.id === Number(req.params.id));
  if (!task) return res.status(404).json({ error: "Task not found" });
  res.json(task);
});

router.post("/", (req: Request, res: Response) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ error: "title is required" });
  const task: Task = { id: nextId++, title, done: false };
  tasks.push(task);
  res.status(201).json(task);
});

router.patch("/:id", (req: Request, res: Response) => {
  const task = tasks.find((t) => t.id === Number(req.params.id));
  if (!task) return res.status(404).json({ error: "Task not found" });
  if (req.body.title !== undefined) task.title = req.body.title;
  if (req.body.done !== undefined) task.done = req.body.done;
  res.json(task);
});

router.delete("/:id", (req: Request, res: Response) => {
  const idx = tasks.findIndex((t) => t.id === Number(req.params.id));
  if (idx === -1) return res.status(404).json({ error: "Task not found" });
  tasks.splice(idx, 1);
  res.status(204).end();
});

export default router;
