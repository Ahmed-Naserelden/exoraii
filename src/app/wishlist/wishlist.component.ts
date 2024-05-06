import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../model/product';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent{


    wishlist: Product[] = [];
    // productsSubscription: Subscription | undefined;


    constructor(private productService: ProductsService){

      this.wishlist = productService.getProducts();
      console.log(this.wishlist)



      // this.productService.getProducts().subscribe(
      //   (data)=>{
      //     console.log("DAta")
      //     console.log(data)
      //     this.productsSubscription = data.data
      //   },
      //   (error) => {
      //     console.error('Error fetching products:', error);
      //   }
      // );
      // console.log("this.productsSubscription");
      // console.log(this.productsSubscription);
    }


    // ngOnDestroy () {
    //   this.productsSubscription?.unsubscribe();
    // }

    // ngOnInit(){
    //   this.productsSubscription = this.productService.getProducts().subscribe(products => {
    //     this.wishlist = products;
    //     console.log(this.wishlist[0].name);
    //   });
    // }
    // ngOnDestroy() {
    //   if (this.productsSubscription) {
    //     this.productsSubscription.unsubscribe();
    //   }
    // }
    // getImageUrl(file: File[] | null): string | undefined {
    //   if (file && file.length > 0) {
    //       const imageUrl = URL.createObjectURL(file[0]);
    //       return imageUrl;
    //   }
    //   return undefined;
    // }

}
