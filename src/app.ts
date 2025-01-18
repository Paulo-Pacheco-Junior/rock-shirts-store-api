import express, { Request, Response } from "express";
import cors from "cors";
import shirtRoutes from "./routes/shirtRoutes";
import cartRoutes from "./routes/cartRoutes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use(shirtRoutes);
app.use(cartRoutes);

app.get("/", (req: Request, res: Response): void => {
  res.send("WELCOME to Rock-Shirts-Store-API");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
