

export class Product {
  name: string;
  price: number;
  description: string;
  loc: string;
  since: string;
  images: string[] | undefined;

  constructor(name: string, price: number, description: string, loc: string) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.loc = loc;
    this.since = ''; // Assuming since is an empty string by default
    this.images = undefined; // Assuming images is undefined by default
  }
}
