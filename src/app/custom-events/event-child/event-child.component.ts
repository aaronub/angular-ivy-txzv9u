import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-event-child',
  templateUrl: './event-child.component.html',
  styleUrls: ['./event-child.component.css'],
})
export class EventChildComponent implements OnInit {
  // Declare a new instance of EventEmitter to be Output to parent
  @Output() newMember = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  name: string = '';

  // Method to emit the event with a value
  add() {
    this.newMember.emit(this.name);
  }
}
