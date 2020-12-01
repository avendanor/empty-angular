import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityComponent } from './activity.component';
import { ActivityRoutingModule } from './activity-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgApexchartsModule } from 'ng-apexcharts';
import { HighchartsChartModule } from 'highcharts-angular';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [ActivityComponent],
  imports: [CommonModule, ActivityRoutingModule, FlexLayoutModule, 
    NgApexchartsModule, HighchartsChartModule,MatTableModule]
})
export class ActivityModule {}
