

export class Product{
    name: String = "mac";
    price: Number = 1230;
    description: String = "mac book air";
    loc: String = "cairo";
    since: String = "weak ago";
    images: String[] | undefined;

    constructor(name:String, price:Number, describtion: String, loc: String){
        this.name = name;
        this.price = price
    }
}
