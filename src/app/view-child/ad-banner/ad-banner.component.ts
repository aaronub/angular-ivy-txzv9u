import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AdItem } from '../ad-item';
import { AdDirective } from '../ad.directive';

@Component({
  selector: 'app-ad-banner',
  templateUrl: './ad-banner.component.html',
  styleUrls: ['./ad-banner.component.css'],
})
export class AdBannerComponent implements OnInit, OnDestroy {
  @Input() adData: AdItem[];

  public idx: number = -1;

  // Creating a reference to a Directive to dynamically display components.
  // Static controls whether we want to resolve the query after change detection
  @ViewChild(AdDirective, { static: true }) appAd!: AdDirective;

  private interval: number | undefined;

  constructor() {}

  ngOnInit() {
    this.loadComponent();
    this.getAds();
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  loadComponent(): void {
    // Simply creating a way to choose a new ad by looping
    this.idx = (this.idx + 1) % this.adData.length;
    const currentAd = this.adData[this.idx];

    // Create a reference to the View's container
    const viewContainerRef = this.appAd.viewContainerRef;
    // Clear the ViewContainer
    viewContainerRef.clear();

    // Create a new Component based on component passed into AdItem constructor
    const componentRef = viewContainerRef.createComponent(currentAd.component);

    // Bind the data property to the newly created Component
    componentRef.instance.data = currentAd.data;
  }

  getAds(): void {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 2000);
  }
}
