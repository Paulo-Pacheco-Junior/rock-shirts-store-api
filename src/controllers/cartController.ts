import { Request, Response } from "express";
import { CartItem } from "../models/CartItem";
import cartData from "../data/cartData";

export const getCartItems = (req: Request, res: Response): void => {
  res.json(cartData);
};

export const addToCart = (req: Request, res: Response): void => {
  const { id, img, name, brand, price, size } = req.body;

  const newItem = new CartItem(id, img, name, brand, price, size, 1);
  cartData.push(newItem);

  res.status(201).json(newItem);
};

export const updateCartItem = (req: Request, res: Response): void => {
  const { id } = req.params;
  const { size, counter } = req.body;

  const itemIndex = cartData.findIndex((item) => item.id === id);

  if (itemIndex !== -1) {
    cartData[itemIndex].size = size || cartData[itemIndex].size;
    cartData[itemIndex].counter = counter || cartData[itemIndex].counter;

    res.json(cartData[itemIndex]);
  } else {
    res.status(404).json({ message: "Item not found" });
  }
};

export const removeFromCart = (req: Request, res: Response): void => {
  const { id } = req.params;

  const itemIndex = cartData.findIndex((item) => item.id === id);

  if (itemIndex !== -1) {
    cartData.splice(itemIndex, 1);

    res.json(cartData);
  } else {
    res.status(404).json({ message: "Item not found" });
  }
};
