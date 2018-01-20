import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: 'app/components/home-page/home-page.module#HomePageModule'},
  { path: 'admin', loadChildren: 'app/components/admin-page/admin-page.module#AdminPageModule'},
  { path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting { }
