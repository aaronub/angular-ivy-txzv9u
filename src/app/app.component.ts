import { Component, VERSION } from '@angular/core';
import { AdItem } from './view-child/ad-item';
import { FirstComponent } from './view-child/first/first.component';
import { SecondComponent } from './view-child/second/second.component';
import { ThirdComponent } from './view-child/third/third.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor() {}

  // Views
  data: string = 'Hello World!';

  // Change Detection
  names: string[] = ['Jesse', 'Lexi', 'Ethan'];
  newName: string = '';

  add() {
    this.names.push(this.newName);
    console.log(this.names);
  }
}
