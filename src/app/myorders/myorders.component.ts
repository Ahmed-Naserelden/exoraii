import { Component } from '@angular/core';
import { Product } from '../model/product';
import { Subscription } from 'rxjs';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrl: './myorders.component.css'
})
export class MyordersComponent {
  
  wishlist: Product[] = [];
  productsSubscription: Subscription | undefined;


  constructor(private productService: ProductsService){



    this.productService.getMyOrders().subscribe(
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

  

  ngOnDestroy () {
    this.productsSubscription?.unsubscribe();
  }

}
