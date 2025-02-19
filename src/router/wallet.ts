import { Router, Request, Response } from "express";

const router = Router();

router.get("/findWalletByUserId", async (req: Request, res: Response) => {
  try {
  } catch (error: any) {
    res.status(401).send(error.message);
  }
});

router.post("/addToWallet", async (req: Request, res: Response) => {
  try {
  } catch (error: any) {
    res.status(401).send(error.message);
  }
});

router.post("/pay", async (req: Request, res: Response) => {
  try {
  } catch (error: any) {
    res.status(401).send(error.message);
  }
});

router.post("/confirmPayment", async (req: Request, res: Response) => {
  try {
  } catch (error: any) {
    res.status(401).send(error.message);
  }
});

export default router;
