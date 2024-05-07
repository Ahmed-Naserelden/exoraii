import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnvelopeComponent } from './envelope/envelope.component';
import { FooterComponent } from './footer/footer.component';
import { NotifyComponent } from './notify/notify.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SellComponent } from './sell/sell.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TicketComponent } from './ticket/ticket.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { UsersComponent } from './users/users.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { FormsModule } from '@angular/forms';
import { NotificationsComponent } from './notifications/notifications.component';
import { HomeComponent } from './home/home.component';


import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import {getAuth, provideAuth} from '@angular/fire/auth'

import { provideStorage } from '@angular/fire/storage'
import { getStorage } from 'firebase/storage';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const firebaseConfig = {
  apiKey: "AIzaSyAaaxew6bQkNEptvm8d_Xyn5wg0_cqL6z0",
  authDomain: "exora-7e6d9.firebaseapp.com",
  projectId: "exora-7e6d9",
  storageBucket: "exora-7e6d9.appspot.com",
  messagingSenderId: "588279268499",
  appId: "1:588279268499:web:f8b86217a0b51dd9f97966"
};

@NgModule({
  declarations: [
    AppComponent,
    EnvelopeComponent,
    FooterComponent,
    NotifyComponent,
    ProductdetailsComponent,
    ProductInfoComponent,
    SearchBarComponent,
    SellComponent,
    SidebarComponent,
    TicketComponent,
    UserprofileComponent,
    UsersComponent,
    WishlistComponent,
    NotificationsComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideAuth(()=> getAuth()),
    provideStorage(() => getStorage())
    // AngularFireStorageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
