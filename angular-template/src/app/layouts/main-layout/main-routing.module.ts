import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './main-layout.component';
import { AuthGuard } from '@app-core/auth-guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
      },
      {
        path: 'dashboard',
        pathMatch: 'full',
        loadChildren: () =>
          import('../../main/dashboard/dashboard.module').then(
            m => m.DashboardModule
          )
      },
      {
        path: 'activity',
        pathMatch: 'full',
        loadChildren: () =>
          import('../../main/activity/activity.module').then(
            m => m.ActivityModule
          )
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {}
