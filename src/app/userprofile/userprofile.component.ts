import { Component } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { Profile } from '../model/profile';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrl: './userprofile.component.css'
})
export class UserprofileComponent {
  image = "https://s3-alpha.figma.com/profile/34e29411-e7c6-41aa-aacd-7c5e57238eb2";


  profile: Profile | undefined;
  productsSubscription: Subscription | undefined;

  email: string = "ahmed@gmail.com";
  constructor(profileService: ProfileService){
    profileService.getData(this.email).subscribe(
      (data)=>{
        // console.log(data)
        this.profile = data;
        console.log("wishlist")
        // console.log(this.profile?.wishlist?.[0].description);
        if (this.profile.wishlist) {
          // If wishlist is not null or undefined
    
        } else {
          console.log("No wishlist items found.");
        }
      }, (err)=>{
        console.error('Error fetching products:', err);
      }
    );
  }


  ngOnDestroy () {
    this.productsSubscription?.unsubscribe();
  }

}
