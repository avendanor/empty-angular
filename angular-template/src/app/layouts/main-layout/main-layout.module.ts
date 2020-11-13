import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { MainLayoutComponent } from './main-layout.component';
import { AngularMaterialModule } from '@shared/angular-material/angular-material.module';
import { InterceptorService } from '@app-core/http/interceptor.service';
import { MainRoutingModule } from './main-routing.module';
import { DashboardModule } from '@app-main/dashboard/dashboard.module';
import { SidebarToggleDirective } from './components/sidenav/directives/sidebartoggle.directive';
import { SidebarAnchorToggleDirective } from './components/sidenav/directives/sidebaranchortoggle.directive';
import { SidebarListDirective } from './components/sidenav/directives/sidebarlist.directive';
import { SidebarLinkDirective } from './components/sidenav/directives/sidebarlink.directive';
import { FeatherIconsModule } from '@shared/feather-icons/feather-icons.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SidebarDirective } from './components/sidenav/directives/sidebar.directive';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

@NgModule({
  declarations: [
    MainLayoutComponent,
    SidenavComponent,
    SidebarLinkDirective,
    SidebarListDirective,
    SidebarAnchorToggleDirective,
    SidebarToggleDirective,
    SidebarDirective,
    ToolbarComponent
  ],
  imports: [
    AngularMaterialModule,
    PerfectScrollbarModule,
    FeatherIconsModule,
    FlexLayoutModule,
    RouterModule,
    MainRoutingModule,
    CommonModule,
    DashboardModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ]
})
export class MainLayoutModule {}
