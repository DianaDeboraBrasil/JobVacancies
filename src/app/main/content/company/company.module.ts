import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyComponent } from './company.component';



@NgModule({
  declarations: [CompanyComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [CompanyComponent]
})
export class CompanyModule { }
