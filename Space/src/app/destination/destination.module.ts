import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentMarsComponent } from './content-mars/content-mars.component';


@NgModule({
  declarations: [
    ContentMarsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ContentMarsComponent
  ]
})
export class DestinationModule { }
