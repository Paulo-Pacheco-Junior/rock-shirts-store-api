export class Shirt {
  id: string;
  img: string;
  brand: string;
  score: number;
  comments: string;
  name: string;
  price: number;
  description: string;

  constructor(
    id: string,
    img: string,
    brand: string,
    score: number,
    comments: string,
    name: string,
    price: number,
    description: string
  ) {
    this.id = id;
    this.img = img;
    this.brand = brand;
    this.score = score;
    this.comments = comments;
    this.name = name;
    this.price = price;
    this.description = description;
  }
}
