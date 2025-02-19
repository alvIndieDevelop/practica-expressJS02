import { Router, Request, Response } from "express";
import { AuthService } from "services";

const router = Router();

router.post("/login", async (req: Request, res: Response) => {
  try {
    const { data } = await AuthService.login(req.body);
    res.status(200).json(data);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});
router.post("/register", async (req: Request, res: Response) => {
  try {
    const { data } = await AuthService.register(req.body);
    res.status(200).json(data);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
