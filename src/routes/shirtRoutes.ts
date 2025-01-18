import { Router } from "express";
import { getAllShirts, getShirtById } from "../controllers/shirtController";

const router = Router();

router.get("/shirts", getAllShirts);
router.get("/shirts/:id", getShirtById);

export default router;
