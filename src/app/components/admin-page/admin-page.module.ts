import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPageRouting } from './admin-page.routing';
import { DashBoardModule } from './dash-board/dash-board.module';

import { AdminPageComponent } from './admin-page.component';

@NgModule({
  imports: [
    CommonModule,
    DashBoardModule,
    AdminPageRouting
  ],
  declarations: [AdminPageComponent]
})
export class AdminPageModule { }
