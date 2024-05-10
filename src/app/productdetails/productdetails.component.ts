import { Component } from '@angular/core';
import { Product } from '../model/product';
import { SharedService } from '../services/shared.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css'
})
export class ProductdetailsComponent {
  product: Product | undefined;

  constructor(private sharedServ: SharedService, private productService: ProductsService){
    this.product = sharedServ.product;
  }

  addToWishList(){
    console.log(this.product);
    this.productService.addToWishList(this.product ? this.product : new Product("", 0, "", ""));
  }

  buyPorduct(){
    this.productService.buyPorduct(this.product ? this.product : new Product("", 0, "", ""));
  }
  

}
