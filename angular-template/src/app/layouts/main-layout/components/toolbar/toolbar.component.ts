import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthenticationService } from '@app-core/authentication/authentication.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Output()
  toggleHideSidebar = new EventEmitter<Object>();

  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit() {}

  toggleSidebar() {
    const appSidebar = document.getElementsByClassName('app-sidebar')[0];
    if (appSidebar.classList.contains('hide-sidebar')) {
      this.toggleHideSidebar.emit(false);
    } else {
      this.toggleHideSidebar.emit(true);
    }
  }

  public logout(): void {
    this.authenticationService.logout();
  }
}
