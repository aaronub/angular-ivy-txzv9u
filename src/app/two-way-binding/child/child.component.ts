import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input() value: number;
  @Output() valueChange = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  add() {
    this.valueChange.emit(this.value + 1);
  }

  subtract() {
    this.valueChange.emit(this.value - 1);
  }
}
