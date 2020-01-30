import { Component, OnInit, Input, Output, EventEmitter, AfterViewChecked, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'ng-scroll-detector',
  template: `
    <ng-content></ng-content>
  `,
  styles: []
})
export class NgScrollDetectorComponent implements OnInit, AfterViewChecked, OnChanges {
  @Input() elementId: string;
  @Output() ifScroll: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
    // console.log(this.elementId);
    // this.elementId = "test";
  }
  ngAfterViewChecked() {
    this.ifScrollBar();
  }
  ngOnChanges(changes: SimpleChanges) {
  for (let propName in changes) {
    let chng = changes[propName];
    let cur  = JSON.stringify(chng.currentValue);
    let prev = JSON.stringify(chng.previousValue);
    console.log('Changes'+ prev,cur)
   // this.changeLog.push(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
  }
}
  ifScrollBar() {
    if (this.elementId) {
      let el = document.getElementById(`${this.elementId}`);
      console.log(this.elementId);
      let hs = el.scrollWidth > el.clientWidth;
      let vs = el.scrollHeight > el.clientHeight;
      let scrollBar = {
        elClientWidth: el.scrollWidth,
        elScrollWidth: el.clientWidth,
        elScrollHeight: el.scrollHeight,
        elClientHeight: el.clientHeight,
        isVs: vs,
        isHs: hs
      }
      this.ifScroll.emit(scrollBar);
    } else {
      throw console.error('Element not found, specify element to detect scroll');
    }
  }

}