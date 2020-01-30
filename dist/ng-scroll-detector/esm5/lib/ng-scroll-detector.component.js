/**
 * @fileoverview added by tsickle
 * Generated from: lib/ng-scroll-detector.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var NgScrollDetectorComponent = /** @class */ (function () {
    function NgScrollDetectorComponent() {
        this.ifScroll = new EventEmitter();
    }
    /**
     * @return {?}
     */
    NgScrollDetectorComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // console.log(this.elementId);
        // this.elementId = "test";
    };
    /**
     * @return {?}
     */
    NgScrollDetectorComponent.prototype.ngAfterViewChecked = /**
     * @return {?}
     */
    function () {
        this.ifScrollBar();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NgScrollDetectorComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        for (var propName in changes) {
            /** @type {?} */
            var chng = changes[propName];
            /** @type {?} */
            var cur = JSON.stringify(chng.currentValue);
            /** @type {?} */
            var prev = JSON.stringify(chng.previousValue);
            console.log('Changes' + prev, cur);
            // this.changeLog.push(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
        }
    };
    /**
     * @return {?}
     */
    NgScrollDetectorComponent.prototype.ifScrollBar = /**
     * @return {?}
     */
    function () {
        if (this.elementId) {
            /** @type {?} */
            var el = document.getElementById("" + this.elementId);
            console.log(this.elementId);
            /** @type {?} */
            var hs = el.scrollWidth > el.clientWidth;
            /** @type {?} */
            var vs = el.scrollHeight > el.clientHeight;
            /** @type {?} */
            var scrollBar = {
                elClientWidth: el.scrollWidth,
                elScrollWidth: el.clientWidth,
                elScrollHeight: el.scrollHeight,
                elClientHeight: el.clientHeight,
                isVs: vs,
                isHs: hs
            };
            this.ifScroll.emit(scrollBar);
        }
        else {
            throw console.error('Element not found, specify element to detect scroll');
        }
    };
    NgScrollDetectorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ng-scroll-detector',
                    template: "\n    <ng-content></ng-content>\n  "
                }] }
    ];
    /** @nocollapse */
    NgScrollDetectorComponent.ctorParameters = function () { return []; };
    NgScrollDetectorComponent.propDecorators = {
        elementId: [{ type: Input }],
        ifScroll: [{ type: Output }]
    };
    return NgScrollDetectorComponent;
}());
export { NgScrollDetectorComponent };
if (false) {
    /** @type {?} */
    NgScrollDetectorComponent.prototype.elementId;
    /** @type {?} */
    NgScrollDetectorComponent.prototype.ifScroll;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctc2Nyb2xsLWRldGVjdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXNjcm9sbC1kZXRlY3Rvci8iLCJzb3VyY2VzIjpbImxpYi9uZy1zY3JvbGwtZGV0ZWN0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBNEQsTUFBTSxlQUFlLENBQUM7QUFFekk7SUFVRTtRQURVLGFBQVEsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQUNoRCxDQUFDOzs7O0lBRWpCLDRDQUFROzs7SUFBUjtRQUNFLCtCQUErQjtRQUMvQiwyQkFBMkI7SUFDN0IsQ0FBQzs7OztJQUNELHNEQUFrQjs7O0lBQWxCO1FBQ0UsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBQ0QsK0NBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2xDLEtBQUssSUFBSSxRQUFRLElBQUksT0FBTyxFQUFFOztnQkFDeEIsSUFBSSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUM7O2dCQUN4QixHQUFHLEdBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDOztnQkFDeEMsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztZQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRSxJQUFJLEVBQUMsR0FBRyxDQUFDLENBQUE7WUFDakMsc0ZBQXNGO1NBQ3RGO0lBQ0gsQ0FBQzs7OztJQUNDLCtDQUFXOzs7SUFBWDtRQUNFLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTs7Z0JBQ2QsRUFBRSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBRyxJQUFJLENBQUMsU0FBVyxDQUFDO1lBQ3JELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDOztnQkFDeEIsRUFBRSxHQUFHLEVBQUUsQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLFdBQVc7O2dCQUNwQyxFQUFFLEdBQUcsRUFBRSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUMsWUFBWTs7Z0JBQ3RDLFNBQVMsR0FBRztnQkFDZCxhQUFhLEVBQUUsRUFBRSxDQUFDLFdBQVc7Z0JBQzdCLGFBQWEsRUFBRSxFQUFFLENBQUMsV0FBVztnQkFDN0IsY0FBYyxFQUFFLEVBQUUsQ0FBQyxZQUFZO2dCQUMvQixjQUFjLEVBQUUsRUFBRSxDQUFDLFlBQVk7Z0JBQy9CLElBQUksRUFBRSxFQUFFO2dCQUNSLElBQUksRUFBRSxFQUFFO2FBQ1Q7WUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUMvQjthQUFNO1lBQ0wsTUFBTSxPQUFPLENBQUMsS0FBSyxDQUFDLHFEQUFxRCxDQUFDLENBQUM7U0FDNUU7SUFDSCxDQUFDOztnQkE5Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLFFBQVEsRUFBRSxxQ0FFVDtpQkFFRjs7Ozs7NEJBRUUsS0FBSzsyQkFDTCxNQUFNOztJQXVDVCxnQ0FBQztDQUFBLEFBaERELElBZ0RDO1NBekNZLHlCQUF5Qjs7O0lBQ3BDLDhDQUEyQjs7SUFDM0IsNkNBQWdFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQWZ0ZXJWaWV3Q2hlY2tlZCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2UsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmctc2Nyb2xsLWRldGVjdG9yJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgTmdTY3JvbGxEZXRlY3RvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3Q2hlY2tlZCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgZWxlbWVudElkOiBzdHJpbmc7XG4gIEBPdXRwdXQoKSBpZlNjcm9sbDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmVsZW1lbnRJZCk7XG4gICAgLy8gdGhpcy5lbGVtZW50SWQgPSBcInRlc3RcIjtcbiAgfVxuICBuZ0FmdGVyVmlld0NoZWNrZWQoKSB7XG4gICAgdGhpcy5pZlNjcm9sbEJhcigpO1xuICB9XG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgZm9yIChsZXQgcHJvcE5hbWUgaW4gY2hhbmdlcykge1xuICAgIGxldCBjaG5nID0gY2hhbmdlc1twcm9wTmFtZV07XG4gICAgbGV0IGN1ciAgPSBKU09OLnN0cmluZ2lmeShjaG5nLmN1cnJlbnRWYWx1ZSk7XG4gICAgbGV0IHByZXYgPSBKU09OLnN0cmluZ2lmeShjaG5nLnByZXZpb3VzVmFsdWUpO1xuICAgIGNvbnNvbGUubG9nKCdDaGFuZ2VzJysgcHJldixjdXIpXG4gICAvLyB0aGlzLmNoYW5nZUxvZy5wdXNoKGAke3Byb3BOYW1lfTogY3VycmVudFZhbHVlID0gJHtjdXJ9LCBwcmV2aW91c1ZhbHVlID0gJHtwcmV2fWApO1xuICB9XG59XG4gIGlmU2Nyb2xsQmFyKCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnRJZCkge1xuICAgICAgbGV0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dGhpcy5lbGVtZW50SWR9YCk7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmVsZW1lbnRJZCk7XG4gICAgICBsZXQgaHMgPSBlbC5zY3JvbGxXaWR0aCA+IGVsLmNsaWVudFdpZHRoO1xuICAgICAgbGV0IHZzID0gZWwuc2Nyb2xsSGVpZ2h0ID4gZWwuY2xpZW50SGVpZ2h0O1xuICAgICAgbGV0IHNjcm9sbEJhciA9IHtcbiAgICAgICAgZWxDbGllbnRXaWR0aDogZWwuc2Nyb2xsV2lkdGgsXG4gICAgICAgIGVsU2Nyb2xsV2lkdGg6IGVsLmNsaWVudFdpZHRoLFxuICAgICAgICBlbFNjcm9sbEhlaWdodDogZWwuc2Nyb2xsSGVpZ2h0LFxuICAgICAgICBlbENsaWVudEhlaWdodDogZWwuY2xpZW50SGVpZ2h0LFxuICAgICAgICBpc1ZzOiB2cyxcbiAgICAgICAgaXNIczogaHNcbiAgICAgIH1cbiAgICAgIHRoaXMuaWZTY3JvbGwuZW1pdChzY3JvbGxCYXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBjb25zb2xlLmVycm9yKCdFbGVtZW50IG5vdCBmb3VuZCwgc3BlY2lmeSBlbGVtZW50IHRvIGRldGVjdCBzY3JvbGwnKTtcbiAgICB9XG4gIH1cblxufSJdfQ==