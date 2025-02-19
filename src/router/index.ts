import { Router } from "express";

import user from "./user";
import auth from "./auth";
import wallet from "./wallet";
import { requestLogger } from "../middleware/logMiddleware";

const router = Router();
router.use(requestLogger);
router.use("/api/user", user);
router.use("/api/auth", auth);
router.use("/api/wallet", wallet);

export default router;
