import { Router } from "express";
const router = Router();

import healthCheck from "../controllers/healthcheck.controller.js";

router.route("/").get(healthCheck)

export default router;