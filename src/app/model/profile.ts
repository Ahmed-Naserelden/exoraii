import { Product } from "./product";

export class Profile{
    name: String | undefined;
    email: String | undefined;
    phone: String | undefined;
    wishlist: string[] | undefined;
    since: String | undefined;
    reviews : Number | undefined;
    dateofbirth: String | undefined;
    products: Number | undefined;
    followers: Number | undefined;

    constructor(
      name: String,
      email: String,
      phone: String,
      wishlist: Product[],
      since: String,
      reviews : Number,
      dateofbirth: String,
      products: Number,
      followers: Number
    ){

	}

	getName(): String{
		return "";
	}
}
