import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SpinnerService } from '@shared/components/spinner/spinner.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  @ViewChild('sidebarBgImage') sidebarBgImage: ElementRef;
  @ViewChild('appSidebar') appSidebar: ElementRef;
  @ViewChild('wrapper') wrapper: ElementRef;

  hideSidebar: boolean;
  expanded: boolean;

  constructor(public spinnerService: SpinnerService) {}

  ngOnInit() {}

  toggleHideSidebar($event: boolean): void {
    setTimeout(() => {
      this.hideSidebar = $event;
    }, 0);
  }
}
