import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-child',
  templateUrl: './simple-child.component.html',
  styleUrls: ['./simple-child.component.css'],
})
export class SimpleChildComponent implements OnInit {
  @Input() str: string;

  constructor() {}

  ngOnInit() {}
}
