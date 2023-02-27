import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { AdItem } from './ad-item';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { SimpleChildComponent } from './simple-child/simple-child.component';
import { ThirdComponent } from './third/third.component';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css'],
})
export class ViewChildComponent implements OnInit, AfterViewInit {
  constructor() {}

  //* -------------------Simple Example------------------- */

  // Instantiate a referernce to SimpleChildComponent with the 'simple' identifier
  @ViewChild(SimpleChildComponent) simple: SimpleChildComponent;

  // Simple data to pass to SimpleChildComponent
  public str: string = 'Hello World!';

  // Values are undefined at component initialization!
  ngOnInit(): void {
    // console.log(this.simple.str)
  }

  // Values are only available AfterViewInit!
  ngAfterViewInit(): void {
    console.log(this.simple.str);
  }

  // Will not trigger AfterViewInit (View has already been instantiated)
  changeText(): void {
    this.simple.str = 'Goodbye!';
  }

  //* -------------------Real World Example------------------- */

  adData: AdItem[] = [
    new AdItem(FirstComponent, {
      title: 'Apple iPhone 14',
      desc: 'The Only Phone You Will Ever Need!',
    }),
    new AdItem(SecondComponent, {
      title: 'Apply For A New Mastercard Today!',
      desc: 'You are already pre-approved!',
    }),
    new AdItem(ThirdComponent, {
      title: 'Best Buy End Of Year Sale!',
      desc: 'The perfect gifts for everyone!',
    }),
  ];
}
