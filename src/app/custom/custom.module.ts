import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleComponent } from './sample/sample.component';


@NgModule({
  declarations: [
    SampleComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [  //makes available to other module
    SampleComponent
  ],
})
export class CustomModule { }
