import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarHomeComponent } from './navbar-home/navbar-home.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';





@NgModule({
  declarations: [
    NavbarHomeComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    NavbarHomeComponent,
    FooterComponent
    
  ]
})
export class SharedModule { }
