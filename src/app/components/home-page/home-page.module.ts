import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRouting } from './home-page.routing';
import { HomePageComponent } from './home-page.component';

@NgModule({
  imports: [
    CommonModule,
    HomePageRouting
  ],
  declarations: [HomePageComponent]
})
export class HomePageModule { }
