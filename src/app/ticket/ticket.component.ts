import { Component, Input } from '@angular/core';
import { Product } from '../model/product';
import { ProductsService } from '../services/products.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  @Input() productimage: string | undefined;
  @Input() productname: string = "product one";
  @Input() productprice: number = 0;
  @Input() location: string = "";
  @Input() since: string = "";
  @Input() id: string = '';
  @Input() sellerEmail: string = '';
  @Input() wisherEmail: string = '';
  @Input() order: boolean = false;

  @Input() producdescription: string ="undefined";
  productsSubscription: Subscription | undefined;
  
  constructor(private productServices: ProductsService){

  }


  @Input() isLiked: boolean = false;
 
  product: Product = {
    id: '',
    name: '',
    description: '',
    since: '',
    price: 0,
    loc: '',
    sellerEmail: '',
    wisherEmail: '',
    buyerEmail: '',
    images: [] // Reset the images property to an empty array
  };

  toggleLike() {
    if(!this.isLiked && this.order == false)
      this.addToWishList();
    else if(this.order == false)
      this.removeFromWishList()
    else if(this.order == true)
      this.removeFromMyOrders();
    
    
    
    
    this.isLiked = !this.isLiked;
  }

  addToWishList(){
    this.product = {
      id: this.id,
      name: this.productname,
      description: this.producdescription,
      since: this.since,
      price: this.productprice,
      buyerEmail: '',
      loc: this.location,
      sellerEmail: '',
      wisherEmail: '',
      images: [] 
    };

    this.productServices.addToWishList(this.product);

  }

  removeFromMyOrders(){
    this.productServices.removeFromMyOrders(this.id);
  }

  removeFromWishList(){
    console.log("this.id : ", this.id);
    this.productServices.removeFromWishList(this.id);
  }

}
