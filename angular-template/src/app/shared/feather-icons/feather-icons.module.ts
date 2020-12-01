import { NgModule } from '@angular/core';

import { FeatherModule } from 'angular-feather';
import { Grid, List, Edit2, FileText, AlignLeft, Activity } from 'angular-feather/icons';

const icons = {
  Grid,
  List,
  Edit2,
  FileText,
  AlignLeft,
  Activity
};

@NgModule({
  imports: [FeatherModule.pick(icons)],
  exports: [FeatherModule]
})
export class FeatherIconsModule {}
