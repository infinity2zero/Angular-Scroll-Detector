import { Injectable, ɵɵdefineInjectable, EventEmitter, Component, Input, Output, Directive, HostListener, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
                    CommonModule, BrowserModule, FormsModule, ReactiveFormsModule
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
