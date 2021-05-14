import { MainComponent } from './main.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContentModule } from './content/content.module';
import { SharedModule } from './content/shared/shared.module';

@NgModule({
  declarations: [MainComponent],
  imports: [
    RouterModule,
    CommonModule,
    ContentModule,
    SharedModule,
  ],
  exports: [MainComponent]
})
export class MainModule { }
