export class CartItem {
  id: string;
  img: string;
  name: string;
  brand: string;
  price: number;
  size: string;
  counter: number;

  constructor(
    id: string,
    img: string,
    name: string,
    brand: string,
    price: number,
    size: string,
    counter: number
  ) {
    this.id = id;
    this.img = img;
    this.name = name;
    this.brand = brand;
    this.price = price;
    this.size = size;
    this.counter = counter;
  }
}
