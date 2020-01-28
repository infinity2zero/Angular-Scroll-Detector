import {Directive, HostListener, Output, EventEmitter}from '@angular/core';
  
  @Directive({
    selector: '[elemntscrollTracker]',
  })
  
  export class elemntscrollTracker {
    @Output() scrolled = new EventEmitter<any>();
  
    @HostListener('scroll', ['$event'])
    onScroll(event) {
      // do tracking
      // console.log('scrolled', event.target.scrollTop);
      // Listen to click events in the component
      let tracker = event.target;
      let endReachedVerticle = false;
      let endReachedHorizontal = false;
      let limitVerticle = tracker.scrollHeight - tracker.clientHeight;
      let limitHorizontal = tracker.scrollWidth - tracker.clientWidth;
      // alert(event.target.scrollLeft);
     // console.log(event.target.scrollTop, limitVerticle);
      if (event.target.scrollTop === limitVerticle) {
        // alert('end reached');
        endReachedVerticle = true;
      }
      if (event.target.scrollLeft === limitHorizontal) {
        // alert('end reached bottom');
        endReachedHorizontal = true;
      }
      this.scrolled.emit({
        posVerticle: event.target.scrollTop,
        endReachedVerticle,
        posHorizontal:event.target.scrollLeft,
        endReachedHorizontal
      })
    }
  }
  @Directive({
    selector: '[htmlbodyscrollTracker]',
  })
  export class htmlbodyscrollTracker {
    @Output() bodyscrolled = new EventEmitter<any>();
    @HostListener('window:scroll', ['$event'])
    onScroll(event) {
        const verticalOffset = window.pageYOffset 
          || document.documentElement.scrollTop 
          || document.body.scrollTop || 0;
         const HorizontalOffset = window.pageXOffset 
          || document.documentElement.scrollLeft
          || document.body.scrollLeft || 0;
      
      this.bodyscrolled.emit({
          verticalOffset,
          HorizontalOffset,
      })
    }
  }