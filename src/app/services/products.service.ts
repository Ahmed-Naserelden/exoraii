import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, from } from 'rxjs';

import { Subject } from 'rxjs';
import { TicketComponent } from '../ticket/ticket.component';

import { Product } from '../model/product';
import { Firestore, addDoc, setDoc, deleteDoc, doc, collection, collectionData } from '@angular/fire/firestore';
import { Storage, ref, uploadBytesResumable } from '@angular/fire/storage';

// import { AngularFireStorage } from '@angular/fire/compat/storage';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private firestore = inject(Firestore);
  private storage = inject(Storage);

  productsCollection = collection(this.firestore, 'products');


  constructor(){}


  getProducts(): Observable<Product[]>{
    return collectionData(this.productsCollection) as Observable<Product[]>;
  }

  // uploadFile(input: HTMLInputElement) {
  // uploadFile(file: File): Observable<String> {
  //   const storageRef = ref(this.storage, file.name);
  //   const promise = uploadBytesResumable(storageRef, file).then((res) => {return res.ref});
  //   // return from(promise);

  //   // if (!input.files) return

  //   // const files: FileList = input.files;

  //   // for (let i = 0; i < files.length; i++) {
  //   //     const file = files.item(i);
  //   //     if (file) {
  //   //         const storageRef = ref(this.storage, file.name);
  //   //         uploadBytesResumable(storageRef, file);
  //   //     }
  //   // }
  // }

  addProduct(product: Product, file: File): Observable<String>{
    // uploadFile(file);
    const productData = { ...product };
    const promise = addDoc(this.productsCollection, productData).then((res) => {
      return res.id;
    });
    return from(promise);
  }

  updateProduct(productId: String, product: Product): Observable<void>{
    const docRef = doc(this.firestore, 'products' + productId);
    const updatePromise = setDoc(docRef, this.updateProduct);
    return from(updatePromise);
  }


  removeProduct(productId: String):  Observable<void>{
    const docRef = doc(this.firestore, 'products' + productId);
    const deletePromise = deleteDoc(docRef);
    return from(deletePromise);
  }


}
