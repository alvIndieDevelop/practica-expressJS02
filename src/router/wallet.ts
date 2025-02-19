import { Router, Request, Response } from "express";
import { WalletService } from "../services";

const router = Router();

router.get("/findWalletByUserId", async (req: Request, res: Response) => {
  try {
    const { data } = await WalletService.findWalletByUserId(
      req.query.userId as string
    );
    res.status(200).json(data);
  } catch (error: any) {
    res.status(401).send(error.message);
  }
});

router.post("/addToWallet", async (req: Request, res: Response) => {
  try {
    const { data } = await WalletService.addToWallet(req.body);
    res.status(200).json(data);
  } catch (error: any) {
    res.status(401).send(error.message);
  }
});

router.post("/pay", async (req: Request, res: Response) => {
  try {
    const { data } = await WalletService.pay(req.body);
    res.status(200).json(data);
  } catch (error: any) {
    res.status(401).send(error.message);
  }
});

router.post("/confirmPayment", async (req: Request, res: Response) => {
  try {
    const { data } = await WalletService.confirmPayment(req.body);
    res.status(200).json(data);
  } catch (error: any) {
    res.status(401).send(error.message);
  }
});

export default router;
