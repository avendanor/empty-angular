import { Component, OnInit } from '@angular/core';
import { UnsubscribeOnDestroyAdapter } from '@app-core/unsuscribe-adapter/unsuscribe-adapter';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent extends UnsubscribeOnDestroyAdapter
  implements OnInit {
  constructor() {
    super();
  }

  ngOnInit() {}
}
