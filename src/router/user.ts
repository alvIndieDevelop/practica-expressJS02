import { Router, Request, Response } from "express";
import { UserService } from "../services";

const router = Router();

router.get("/", async (_req: Request, res: Response) => {
  try {
    const { data } = await UserService.findAll();
    res.status(200).json(data);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/:id", async (req: Request, res: Response) => {
  try {
    const { data } = await UserService.findOne(req.params.id);
    res.status(200).json(data);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", async (req: Request, res: Response) => {
  try {
    const { data } = await UserService.create(req.body);
    res.status(200).json(data);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});

router.put("/:id", async (req: Request, res: Response) => {
  try {
    const { data } = await UserService.update(req.params.id, req.body);
    res.status(200).json(data);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});

router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const { data } = await UserService.delete(req.params.id);
    res.status(200).json(data);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
