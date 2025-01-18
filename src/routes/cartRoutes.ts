import { Router } from "express";
import {
  getCartItems,
  addToCart,
  updateCartItem,
  removeFromCart,
} from "../controllers/cartController";

const router = Router();

router.get("/cart", getCartItems);
router.post("/cart", addToCart);
router.put("/cart/:id", updateCartItem);
router.delete("/cart/:id", removeFromCart);

export default router;
