import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'wishlist', component: WishlistComponent},
  {path: 'profile', component: UserprofileComponent},
  {path: 'productdetails', component: ProductdetailsComponent},
  {path: 'post', component: ProductInfoComponent},
  {path: 'notification', component: NotificationsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '', component: HomeComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
