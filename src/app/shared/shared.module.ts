import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarHomeComponent } from './navbar-home/navbar-home.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NavbarOptionsComponent } from './navbar-options/navbar-options.component';





@NgModule({
  declarations: [
    NavbarHomeComponent,
    FooterComponent,
    NavbarOptionsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    NavbarHomeComponent,
    FooterComponent,
    NavbarOptionsComponent
    
  ]
})
export class SharedModule { }
