import { Injectable } from '@angular/core';
import { Profile } from '../model/profile';
import { Observable } from 'rxjs';
import { Firestore, addDoc, collection, doc, getDoc, collectionData  } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Product } from '../model/product';
// import {  } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private fireStore: Firestore) { }

  getData(userId: string): Observable<Profile>{
    const userDocRef = doc(this.fireStore, 'profile', userId); // Reference to the user document
    const userDocSnapshot = getDoc(userDocRef); // Retrieve the document snapshot


    return new Observable<Profile>((observer) => {
      userDocSnapshot.then((doc) => {
        if (doc.exists()) {
          const userData = doc.data() as Profile; // Convert Firestore document data to Profile type
          observer.next(userData); // Emit the user data
        } else {
          observer.next(undefined); // Emit undefined if user document does not exist
        }
        observer.complete(); // Complete the observable
      }).catch((error) => {
        observer.error(error); // Emit an error if there's any issue fetching the document
      });
    });
  }

}
