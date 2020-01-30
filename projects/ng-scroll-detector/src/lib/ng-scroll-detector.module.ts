import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgScrollDetectorComponent } from './ng-scroll-detector.component';
import { elemntscrollTracker,htmlbodyscrollTracker } from './ng-scroll.directive';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';


@NgModule({
  declarations: [NgScrollDetectorComponent, elemntscrollTracker,htmlbodyscrollTracker],
  imports: [
    CommonModule, BrowserModule,FormsModule,ReactiveFormsModule
  ],
  exports: [NgScrollDetectorComponent,elemntscrollTracker,htmlbodyscrollTracker]
})
export class NgScrollDetectorModule { }
