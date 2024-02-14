import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZoomImgDirective } from './zoom-img.directive';



@NgModule({
  declarations: [
    ZoomImgDirective],
  imports: [
    CommonModule
  ],
  exports: [
    ZoomImgDirective
  ]
})
export class DirectivesModule { }
