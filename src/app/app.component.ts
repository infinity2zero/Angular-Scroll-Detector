import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AngularScrollDetector';
  posVerticle: 0;
  endReachedVerticle: false
  posHorizontal: 0
  endReachedHorizontal: false
  bodyHorizontalOff =0;
  bodyVerticalOff =0;
  
  elementScrollEvt(evt) {
    this.posVerticle = evt.posVerticle;
    this.endReachedVerticle = evt.endReachedVerticle;
    this.posHorizontal = evt.posHorizontal;
    this.endReachedHorizontal = evt.endReachedHorizontal;
   
  }
  bodyScrolled(evt){
    // console.log(evt.verticalOffset);
    this.bodyHorizontalOff = evt.HorizontalOffset;
    this.bodyVerticalOff = evt.verticalOffset;
  }
  ngOnInit() {
    this.posVerticle = 0;
    this.endReachedVerticle = false;
    this.posHorizontal = 0;
    this.endReachedHorizontal = false;
    this.bodyHorizontalOff = 0;
    this.bodyVerticalOff = 0;
  }
  ifScroll(evt) {
    console.log(JSON.stringify(evt));
  }
}
