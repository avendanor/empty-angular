import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { ROUTES } from './configuration/sidenav-routes.config';
import { customAnimations } from './animations/custom-animations';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  animations: customAnimations
})
export class SidenavComponent implements OnInit {
  @ViewChild('toggleIcon') toggleIcon: ElementRef;

  public menuItems: any[];
  depth: number;
  activeTitles: string[] = [];
  expanded: boolean;
  navCollapsedOpen = false;
  logoUrl = 'assets/images/logos/logo_united_mile_fleet.png';
  public config: any = {};

  constructor() {
    if (this.depth === undefined) {
      this.depth = 0;
      this.expanded = true;
    }
  }

  ngOnInit() {
    this.menuItems = ROUTES;
  }

  toggleSlideInOut() {
    this.expanded = !this.expanded;
  }

  handleToggle(titles) {
    this.activeTitles = titles;
  }
}
