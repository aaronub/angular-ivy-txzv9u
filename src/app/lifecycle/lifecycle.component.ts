import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css'],
})
export class LifecycleComponent implements OnInit, OnChanges, OnDestroy {
  @Input() data: string;

  // First to run during Creation Phase. Here, we can include modules for usage in our component
  constructor() {}

  tick;

  // Next to run during Creation Phase. Specifies methods, functions, or actions to be ran at Creation time
  // Ex. data fetching
  ngOnInit() {
    this.tick = setInterval(() => {
      console.log('tick');
    }, 1000);
  }

  // Triggered during Change/Update Phase, when there is a change in a data bound property from the parent
  ngOnChanges() {
    console.log('value changed!');
  }

  // Triggered when the component is removed from the DOM
  ngOnDestroy() {
    return clearInterval(this.tick);
  }
}
