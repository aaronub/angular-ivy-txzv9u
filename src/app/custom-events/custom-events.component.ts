import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-events',
  templateUrl: './custom-events.component.html',
  styleUrls: ['./custom-events.component.css'],
})
export class CustomEventsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  atla: string[] = ['Aang', 'Sokka', 'Zuko', 'Katara', 'Toph'];

  // Action to take when the custom event is emitted
  onNewMember(name: string) {
    this.atla.push(name);
  }
}
