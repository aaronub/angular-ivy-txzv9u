import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';

// Component Decorator, providing metadata about this View
@Component({
  selector: 'app-views', // Tells us how to select and use this View
  templateUrl: './views.component.html', // Specifies the Template for this Component
  styleUrls: ['./views.component.css'], // Specifies the stylesheet used by this View
})
export class ViewsComponent implements OnInit {
  
  constructor() {}

  ngOnInit(): void {}

  // Class variable/property
  sentence: string = 'I am a variable defined in the Component';
}
