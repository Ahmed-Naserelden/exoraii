import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  product: Product | undefined;
  curUserEmail: string | undefined;
  constructor() { }

}
