/**
 * @fileoverview added by tsickle
 * Generated from: lib/ng-scroll.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostListener, Output, EventEmitter } from '@angular/core';
export class elemntscrollTracker {
    constructor() {
        this.scrolled = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onScroll(event) {
        // do tracking
        // console.log('scrolled', event.target.scrollTop);
        // Listen to click events in the component
        /** @type {?} */
        let tracker = event.target;
        /** @type {?} */
        let endReachedVerticle = false;
        /** @type {?} */
        let endReachedHorizontal = false;
        /** @type {?} */
        let limitVerticle = tracker.scrollHeight - tracker.clientHeight;
        /** @type {?} */
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
            posHorizontal: event.target.scrollLeft,
            endReachedHorizontal
        });
    }
}
elemntscrollTracker.decorators = [
    { type: Directive, args: [{
                selector: '[elemntscrollTracker]',
            },] }
];
elemntscrollTracker.propDecorators = {
    scrolled: [{ type: Output }],
    onScroll: [{ type: HostListener, args: ['scroll', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    elemntscrollTracker.prototype.scrolled;
}
export class htmlbodyscrollTracker {
    constructor() {
        this.bodyscrolled = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onScroll(event) {
        /** @type {?} */
        const verticalOffset = window.pageYOffset
            || document.documentElement.scrollTop
            || document.body.scrollTop || 0;
        /** @type {?} */
        const HorizontalOffset = window.pageXOffset
            || document.documentElement.scrollLeft
            || document.body.scrollLeft || 0;
        this.bodyscrolled.emit({
            verticalOffset,
            HorizontalOffset,
        });
    }
}
htmlbodyscrollTracker.decorators = [
    { type: Directive, args: [{
                selector: '[htmlbodyscrollTracker]',
            },] }
];
htmlbodyscrollTracker.propDecorators = {
    bodyscrolled: [{ type: Output }],
    onScroll: [{ type: HostListener, args: ['window:scroll', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    htmlbodyscrollTracker.prototype.bodyscrolled;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctc2Nyb2xsLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXNjcm9sbC1kZXRlY3Rvci8iLCJzb3VyY2VzIjpbImxpYi9uZy1zY3JvbGwuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBQyxNQUFLLGVBQWUsQ0FBQztBQU16RSxNQUFNLE9BQU8sbUJBQW1CO0lBSmhDO1FBS1ksYUFBUSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7SUE2Qi9DLENBQUM7Ozs7O0lBMUJDLFFBQVEsQ0FBQyxLQUFLOzs7OztZQUlSLE9BQU8sR0FBRyxLQUFLLENBQUMsTUFBTTs7WUFDdEIsa0JBQWtCLEdBQUcsS0FBSzs7WUFDMUIsb0JBQW9CLEdBQUcsS0FBSzs7WUFDNUIsYUFBYSxHQUFHLE9BQU8sQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDLFlBQVk7O1lBQzNELGVBQWUsR0FBRyxPQUFPLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxXQUFXO1FBQy9ELGtDQUFrQztRQUNuQyxzREFBc0Q7UUFDckQsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsS0FBSyxhQUFhLEVBQUU7WUFDNUMsd0JBQXdCO1lBQ3hCLGtCQUFrQixHQUFHLElBQUksQ0FBQztTQUMzQjtRQUNELElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEtBQUssZUFBZSxFQUFFO1lBQy9DLCtCQUErQjtZQUMvQixvQkFBb0IsR0FBRyxJQUFJLENBQUM7U0FDN0I7UUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNqQixXQUFXLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTO1lBQ25DLGtCQUFrQjtZQUNsQixhQUFhLEVBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFVO1lBQ3JDLG9CQUFvQjtTQUNyQixDQUFDLENBQUE7SUFDSixDQUFDOzs7WUFqQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7YUFDbEM7Ozt1QkFHRSxNQUFNO3VCQUVOLFlBQVksU0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUM7Ozs7SUFGbEMsdUNBQTZDOztBQWlDL0MsTUFBTSxPQUFPLHFCQUFxQjtJQUhsQztRQUlZLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQWVuRCxDQUFDOzs7OztJQWJDLFFBQVEsQ0FBQyxLQUFLOztjQUNKLGNBQWMsR0FBRyxNQUFNLENBQUMsV0FBVztlQUNwQyxRQUFRLENBQUMsZUFBZSxDQUFDLFNBQVM7ZUFDbEMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQzs7Y0FDMUIsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLFdBQVc7ZUFDdkMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxVQUFVO2VBQ25DLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUM7UUFFcEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7WUFDbkIsY0FBYztZQUNkLGdCQUFnQjtTQUNuQixDQUFDLENBQUE7SUFDSixDQUFDOzs7WUFsQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx5QkFBeUI7YUFDcEM7OzsyQkFFRSxNQUFNO3VCQUNOLFlBQVksU0FBQyxlQUFlLEVBQUUsQ0FBQyxRQUFRLENBQUM7Ozs7SUFEekMsNkNBQWlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEhvc3RMaXN0ZW5lciwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9ZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4gIFxuICBARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tlbGVtbnRzY3JvbGxUcmFja2VyXScsXG4gIH0pXG4gIFxuICBleHBvcnQgY2xhc3MgZWxlbW50c2Nyb2xsVHJhY2tlciB7XG4gICAgQE91dHB1dCgpIHNjcm9sbGVkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIFxuICAgIEBIb3N0TGlzdGVuZXIoJ3Njcm9sbCcsIFsnJGV2ZW50J10pXG4gICAgb25TY3JvbGwoZXZlbnQpIHtcbiAgICAgIC8vIGRvIHRyYWNraW5nXG4gICAgICAvLyBjb25zb2xlLmxvZygnc2Nyb2xsZWQnLCBldmVudC50YXJnZXQuc2Nyb2xsVG9wKTtcbiAgICAgIC8vIExpc3RlbiB0byBjbGljayBldmVudHMgaW4gdGhlIGNvbXBvbmVudFxuICAgICAgbGV0IHRyYWNrZXIgPSBldmVudC50YXJnZXQ7XG4gICAgICBsZXQgZW5kUmVhY2hlZFZlcnRpY2xlID0gZmFsc2U7XG4gICAgICBsZXQgZW5kUmVhY2hlZEhvcml6b250YWwgPSBmYWxzZTtcbiAgICAgIGxldCBsaW1pdFZlcnRpY2xlID0gdHJhY2tlci5zY3JvbGxIZWlnaHQgLSB0cmFja2VyLmNsaWVudEhlaWdodDtcbiAgICAgIGxldCBsaW1pdEhvcml6b250YWwgPSB0cmFja2VyLnNjcm9sbFdpZHRoIC0gdHJhY2tlci5jbGllbnRXaWR0aDtcbiAgICAgIC8vIGFsZXJ0KGV2ZW50LnRhcmdldC5zY3JvbGxMZWZ0KTtcbiAgICAgLy8gY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LnNjcm9sbFRvcCwgbGltaXRWZXJ0aWNsZSk7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LnNjcm9sbFRvcCA9PT0gbGltaXRWZXJ0aWNsZSkge1xuICAgICAgICAvLyBhbGVydCgnZW5kIHJlYWNoZWQnKTtcbiAgICAgICAgZW5kUmVhY2hlZFZlcnRpY2xlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChldmVudC50YXJnZXQuc2Nyb2xsTGVmdCA9PT0gbGltaXRIb3Jpem9udGFsKSB7XG4gICAgICAgIC8vIGFsZXJ0KCdlbmQgcmVhY2hlZCBib3R0b20nKTtcbiAgICAgICAgZW5kUmVhY2hlZEhvcml6b250YWwgPSB0cnVlO1xuICAgICAgfVxuICAgICAgdGhpcy5zY3JvbGxlZC5lbWl0KHtcbiAgICAgICAgcG9zVmVydGljbGU6IGV2ZW50LnRhcmdldC5zY3JvbGxUb3AsXG4gICAgICAgIGVuZFJlYWNoZWRWZXJ0aWNsZSxcbiAgICAgICAgcG9zSG9yaXpvbnRhbDpldmVudC50YXJnZXQuc2Nyb2xsTGVmdCxcbiAgICAgICAgZW5kUmVhY2hlZEhvcml6b250YWxcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIEBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW2h0bWxib2R5c2Nyb2xsVHJhY2tlcl0nLFxuICB9KVxuICBleHBvcnQgY2xhc3MgaHRtbGJvZHlzY3JvbGxUcmFja2VyIHtcbiAgICBAT3V0cHV0KCkgYm9keXNjcm9sbGVkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gICAgQEhvc3RMaXN0ZW5lcignd2luZG93OnNjcm9sbCcsIFsnJGV2ZW50J10pXG4gICAgb25TY3JvbGwoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgdmVydGljYWxPZmZzZXQgPSB3aW5kb3cucGFnZVlPZmZzZXQgXG4gICAgICAgICAgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCBcbiAgICAgICAgICB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCB8fCAwO1xuICAgICAgICAgY29uc3QgSG9yaXpvbnRhbE9mZnNldCA9IHdpbmRvdy5wYWdlWE9mZnNldCBcbiAgICAgICAgICB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdFxuICAgICAgICAgIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdCB8fCAwO1xuICAgICAgXG4gICAgICB0aGlzLmJvZHlzY3JvbGxlZC5lbWl0KHtcbiAgICAgICAgICB2ZXJ0aWNhbE9mZnNldCxcbiAgICAgICAgICBIb3Jpem9udGFsT2Zmc2V0LFxuICAgICAgfSlcbiAgICB9XG4gIH0iXX0=