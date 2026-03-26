import { Router } from "express";
import analyticsRouter from "./analytics.routes.js";
import priceRouter from "./price.routes.js";
import assetRouter from "./asset.routes.js";

const router = Router();

router.use("/analytics", analyticsRouter);
router.use("/prices", priceRouter);
router.use("/assets", assetRouter);

export default router;
