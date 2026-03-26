import { Router } from "express";
import { responseWrapper } from "../../middleware/responseWrapper.js";
import disbursementFileRouter from "./disbursement-file.routes.js";

const router = Router();

router.use(responseWrapper);
router.use(disbursementFileRouter);

export default router;
