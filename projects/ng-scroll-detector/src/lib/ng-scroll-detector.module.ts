import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgScrollDetectorComponent } from './ng-scroll-detector.component';
import { elemntscrollTracker,htmlbodyscrollTracker } from './ng-scroll.directive';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [NgScrollDetectorComponent, elemntscrollTracker,htmlbodyscrollTracker],
  imports: [
    CommonModule, BrowserModule
  ],
  exports: [NgScrollDetectorComponent,elemntscrollTracker,htmlbodyscrollTracker]
})
export class NgScrollDetectorModule { }
