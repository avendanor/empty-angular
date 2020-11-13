import { NgModule } from '@angular/core';

import { FeatherModule } from 'angular-feather';
import { Grid, List, Edit2, FileText, AlignLeft } from 'angular-feather/icons';

const icons = {
  Grid,
  List,
  Edit2,
  FileText,
  AlignLeft
};

@NgModule({
  imports: [FeatherModule.pick(icons)],
  exports: [FeatherModule]
})
export class FeatherIconsModule {}
