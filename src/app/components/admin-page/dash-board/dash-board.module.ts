import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashBoardRoutingModule } from './dash-board-routing.module';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [
    CommonModule,
    DashBoardRoutingModule
  ],
  declarations: [DashBoardComponent, ListComponent]
})
export class DashBoardModule { }
