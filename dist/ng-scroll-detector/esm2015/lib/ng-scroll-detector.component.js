/**
 * @fileoverview added by tsickle
 * Generated from: lib/ng-scroll-detector.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class NgScrollDetectorComponent {
    constructor() {
        this.ifScroll = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // console.log(this.elementId);
        // this.elementId = "test";
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        this.ifScrollBar();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        for (let propName in changes) {
            /** @type {?} */
            let chng = changes[propName];
            /** @type {?} */
            let cur = JSON.stringify(chng.currentValue);
            /** @type {?} */
            let prev = JSON.stringify(chng.previousValue);
            console.log('Changes' + prev, cur);
            // this.changeLog.push(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
        }
    }
    /**
     * @return {?}
     */
    ifScrollBar() {
        if (this.elementId) {
            /** @type {?} */
            let el = document.getElementById(`${this.elementId}`);
            console.log(this.elementId);
            /** @type {?} */
            let hs = el.scrollWidth > el.clientWidth;
            /** @type {?} */
            let vs = el.scrollHeight > el.clientHeight;
            /** @type {?} */
            let scrollBar = {
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
    }
}
NgScrollDetectorComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng-scroll-detector',
                template: `
    <ng-content></ng-content>
  `
            }] }
];
/** @nocollapse */
NgScrollDetectorComponent.ctorParameters = () => [];
NgScrollDetectorComponent.propDecorators = {
    elementId: [{ type: Input }],
    ifScroll: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    NgScrollDetectorComponent.prototype.elementId;
    /** @type {?} */
    NgScrollDetectorComponent.prototype.ifScroll;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctc2Nyb2xsLWRldGVjdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXNjcm9sbC1kZXRlY3Rvci8iLCJzb3VyY2VzIjpbImxpYi9uZy1zY3JvbGwtZGV0ZWN0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBNEQsTUFBTSxlQUFlLENBQUM7QUFTekksTUFBTSxPQUFPLHlCQUF5QjtJQUdwQztRQURVLGFBQVEsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQUNoRCxDQUFDOzs7O0lBRWpCLFFBQVE7UUFDTiwrQkFBK0I7UUFDL0IsMkJBQTJCO0lBQzdCLENBQUM7Ozs7SUFDRCxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBQ0QsV0FBVyxDQUFDLE9BQXNCO1FBQ2xDLEtBQUssSUFBSSxRQUFRLElBQUksT0FBTyxFQUFFOztnQkFDeEIsSUFBSSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUM7O2dCQUN4QixHQUFHLEdBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDOztnQkFDeEMsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztZQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRSxJQUFJLEVBQUMsR0FBRyxDQUFDLENBQUE7WUFDakMsc0ZBQXNGO1NBQ3RGO0lBQ0gsQ0FBQzs7OztJQUNDLFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7O2dCQUNkLEVBQUUsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ3JELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDOztnQkFDeEIsRUFBRSxHQUFHLEVBQUUsQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLFdBQVc7O2dCQUNwQyxFQUFFLEdBQUcsRUFBRSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUMsWUFBWTs7Z0JBQ3RDLFNBQVMsR0FBRztnQkFDZCxhQUFhLEVBQUUsRUFBRSxDQUFDLFdBQVc7Z0JBQzdCLGFBQWEsRUFBRSxFQUFFLENBQUMsV0FBVztnQkFDN0IsY0FBYyxFQUFFLEVBQUUsQ0FBQyxZQUFZO2dCQUMvQixjQUFjLEVBQUUsRUFBRSxDQUFDLFlBQVk7Z0JBQy9CLElBQUksRUFBRSxFQUFFO2dCQUNSLElBQUksRUFBRSxFQUFFO2FBQ1Q7WUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUMvQjthQUFNO1lBQ0wsTUFBTSxPQUFPLENBQUMsS0FBSyxDQUFDLHFEQUFxRCxDQUFDLENBQUM7U0FDNUU7SUFDSCxDQUFDOzs7WUE5Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFFBQVEsRUFBRTs7R0FFVDthQUVGOzs7Ozt3QkFFRSxLQUFLO3VCQUNMLE1BQU07Ozs7SUFEUCw4Q0FBMkI7O0lBQzNCLDZDQUFnRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEFmdGVyVmlld0NoZWNrZWQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nLXNjcm9sbC1kZXRlY3RvcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIE5nU2Nyb2xsRGV0ZWN0b3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0NoZWNrZWQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIGVsZW1lbnRJZDogc3RyaW5nO1xuICBAT3V0cHV0KCkgaWZTY3JvbGw6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5lbGVtZW50SWQpO1xuICAgIC8vIHRoaXMuZWxlbWVudElkID0gXCJ0ZXN0XCI7XG4gIH1cbiAgbmdBZnRlclZpZXdDaGVja2VkKCkge1xuICAgIHRoaXMuaWZTY3JvbGxCYXIoKTtcbiAgfVxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gIGZvciAobGV0IHByb3BOYW1lIGluIGNoYW5nZXMpIHtcbiAgICBsZXQgY2huZyA9IGNoYW5nZXNbcHJvcE5hbWVdO1xuICAgIGxldCBjdXIgID0gSlNPTi5zdHJpbmdpZnkoY2huZy5jdXJyZW50VmFsdWUpO1xuICAgIGxldCBwcmV2ID0gSlNPTi5zdHJpbmdpZnkoY2huZy5wcmV2aW91c1ZhbHVlKTtcbiAgICBjb25zb2xlLmxvZygnQ2hhbmdlcycrIHByZXYsY3VyKVxuICAgLy8gdGhpcy5jaGFuZ2VMb2cucHVzaChgJHtwcm9wTmFtZX06IGN1cnJlbnRWYWx1ZSA9ICR7Y3VyfSwgcHJldmlvdXNWYWx1ZSA9ICR7cHJldn1gKTtcbiAgfVxufVxuICBpZlNjcm9sbEJhcigpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50SWQpIHtcbiAgICAgIGxldCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3RoaXMuZWxlbWVudElkfWApO1xuICAgICAgY29uc29sZS5sb2codGhpcy5lbGVtZW50SWQpO1xuICAgICAgbGV0IGhzID0gZWwuc2Nyb2xsV2lkdGggPiBlbC5jbGllbnRXaWR0aDtcbiAgICAgIGxldCB2cyA9IGVsLnNjcm9sbEhlaWdodCA+IGVsLmNsaWVudEhlaWdodDtcbiAgICAgIGxldCBzY3JvbGxCYXIgPSB7XG4gICAgICAgIGVsQ2xpZW50V2lkdGg6IGVsLnNjcm9sbFdpZHRoLFxuICAgICAgICBlbFNjcm9sbFdpZHRoOiBlbC5jbGllbnRXaWR0aCxcbiAgICAgICAgZWxTY3JvbGxIZWlnaHQ6IGVsLnNjcm9sbEhlaWdodCxcbiAgICAgICAgZWxDbGllbnRIZWlnaHQ6IGVsLmNsaWVudEhlaWdodCxcbiAgICAgICAgaXNWczogdnMsXG4gICAgICAgIGlzSHM6IGhzXG4gICAgICB9XG4gICAgICB0aGlzLmlmU2Nyb2xsLmVtaXQoc2Nyb2xsQmFyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgY29uc29sZS5lcnJvcignRWxlbWVudCBub3QgZm91bmQsIHNwZWNpZnkgZWxlbWVudCB0byBkZXRlY3Qgc2Nyb2xsJyk7XG4gICAgfVxuICB9XG5cbn0iXX0=