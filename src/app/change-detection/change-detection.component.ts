import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush, // provides more control for changes
})
export class ChangeDetectionComponent implements OnInit {
  @Input() names: string[];

  // Provides change detection functionality
  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {}

  newData: string = '';

  update() {
    this.cd.detectChanges();
  }
}
