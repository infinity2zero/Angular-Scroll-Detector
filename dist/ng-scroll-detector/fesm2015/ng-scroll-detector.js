import { Injectable, ɵɵdefineInjectable, Component, EventEmitter, Directive, Output, HostListener, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ng-scroll-detector.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgScrollDetectorService {
    constructor() { }
}
NgScrollDetectorService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NgScrollDetectorService.ctorParameters = () => [];
/** @nocollapse */ NgScrollDetectorService.ngInjectableDef = ɵɵdefineInjectable({ factory: function NgScrollDetectorService_Factory() { return new NgScrollDetectorService(); }, token: NgScrollDetectorService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ng-scroll-detector.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgScrollDetectorComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
NgScrollDetectorComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-ng-scroll-detector',
                template: `
    <p>
      ng-scroll-detector works!
    </p>
  `
            }] }
];
/** @nocollapse */
NgScrollDetectorComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ng-scroll.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class elemntscrollTracker {
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
class htmlbodyscrollTracker {
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ng-scroll-detector.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgScrollDetectorModule {
}
NgScrollDetectorModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NgScrollDetectorComponent, elemntscrollTracker, htmlbodyscrollTracker],
                imports: [
                    CommonModule, BrowserModule
                ],
                exports: [NgScrollDetectorComponent, elemntscrollTracker, htmlbodyscrollTracker]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-scroll-detector.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NgScrollDetectorComponent, NgScrollDetectorModule, NgScrollDetectorService, elemntscrollTracker, htmlbodyscrollTracker };
//# sourceMappingURL=ng-scroll-detector.js.map
