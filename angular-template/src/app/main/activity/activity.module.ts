import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityComponent } from './activity.component';
import { ActivityRoutingModule } from './activity-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgApexchartsModule } from 'ng-apexcharts';
import { HighchartsChartModule } from 'highcharts-angular';
import { MatTableModule } from '@angular/material/table';
import {MatDividerModule} from '@angular/material/divider';
import { TagCloudModule } from 'angular-tag-cloud-module';
@NgModule({
  declarations: [ActivityComponent],
  imports: [CommonModule, ActivityRoutingModule, FlexLayoutModule, 
    NgApexchartsModule, HighchartsChartModule,MatTableModule,MatDividerModule,TagCloudModule]
})
export class ActivityModule {}
