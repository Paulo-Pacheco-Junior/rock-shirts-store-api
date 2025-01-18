import { Request, Response } from "express";
import { Shirt } from "../models/Shirt";
import shirtsData from "../data/shirtsData";

export const getAllShirts = (req: Request, res: Response): void => {
  res.json(shirtsData);
};

export const getShirtById = (req: Request, res: Response): void => {
  const shirt: Shirt | undefined = shirtsData.find(
    (shirt) => shirt.id === req.params.id
  );

  if (shirt) {
    res.json(shirt);
  } else {
    res.status(404).json({ message: "Shirt not found" });
  }
};
