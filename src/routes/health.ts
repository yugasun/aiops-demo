import { Router } from "express";
import { readFileSync } from "fs";
import { join } from "path";

const { version } = JSON.parse(
  readFileSync(join(__dirname, "../../package.json"), "utf8")
);

const router = Router();
router.get("/health", (_req, res) => {
  res.json({ status: "ok", version });
});

export default router;
