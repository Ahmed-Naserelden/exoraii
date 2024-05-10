import { Component } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-messenger',
  templateUrl: './messenger.component.html',
  styleUrl: './messenger.component.css'
})
export class MessengerComponent {
  constructor(private sharedData: SharedService){}
}
