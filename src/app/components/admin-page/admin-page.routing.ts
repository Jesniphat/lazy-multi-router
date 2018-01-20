import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPageComponent } from './admin-page.component';

const routes: Routes = [
  {
    path: '',
    component: AdminPageComponent,
    children: [
      {
        path: '',
        redirectTo: 'dash'
      },
      {
        path: 'dash',
        loadChildren: 'app/components/admin-page/dash-board/dash-board.module#DashBoardModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPageRouting { }
