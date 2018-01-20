import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashBoardComponent } from './dash-board/dash-board.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    outlet: 'a',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashBoardComponent,
    outlet: 'a'
  },
  {
    path: 'list/:id',
    component: ListComponent,
    outlet: 'a'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashBoardRoutingModule { }
