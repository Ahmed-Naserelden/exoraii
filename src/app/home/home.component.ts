import { Component } from '@angular/core';
import { Product } from '../model/product';
import { Subscription } from 'rxjs';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  wishlist: Product[] = [];
  productsSubscription: Subscription | undefined;


  constructor(private productService: ProductsService){

    // this.wishlist = productService.getProducts();
    // console.log(this.wishlist)


    this.productService.getProducts().subscribe(
      (data)=>{
        console.log("DAta")
        console.log(data)
        this.wishlist = data
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
    console.log("this.productsSubscription");
    console.log(this.productsSubscription);
  }

  getCategory(category: string){
    this.productService.getCategory(category).subscribe(
      (data)=>{
        console.log("DAta")
        console.log(data)
        this.wishlist = data
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  buyOrder(i: number){
    this.productService.buyPorduct(this.wishlist[i]);
  }


  ngOnDestroy () {
    this.productsSubscription?.unsubscribe();
  }
}
