(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/platform-browser'), require('@angular/common'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('ng-scroll-detector', ['exports', '@angular/core', '@angular/platform-browser', '@angular/common', '@angular/forms'], factory) :
    (global = global || self, factory(global['ng-scroll-detector'] = {}, global.ng.core, global.ng.platformBrowser, global.ng.common, global.ng.forms));
}(this, (function (exports, core, platformBrowser, common, forms) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/ng-scroll-detector.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgScrollDetectorService = /** @class */ (function () {
        function NgScrollDetectorService() {
        }
        NgScrollDetectorService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        NgScrollDetectorService.ctorParameters = function () { return []; };
        /** @nocollapse */ NgScrollDetectorService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function NgScrollDetectorService_Factory() { return new NgScrollDetectorService(); }, token: NgScrollDetectorService, providedIn: "root" });
        return NgScrollDetectorService;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/ng-scroll-detector.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgScrollDetectorComponent = /** @class */ (function () {
        function NgScrollDetectorComponent() {
            this.ifScroll = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: 'ng-scroll-detector',
                        template: "\n    <ng-content></ng-content>\n  "
                    }] }
        ];
        /** @nocollapse */
        NgScrollDetectorComponent.ctorParameters = function () { return []; };
        NgScrollDetectorComponent.propDecorators = {
            elementId: [{ type: core.Input }],
            ifScroll: [{ type: core.Output }]
        };
        return NgScrollDetectorComponent;
    }());
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
    var elemntscrollTracker = /** @class */ (function () {
        function elemntscrollTracker() {
            this.scrolled = new core.EventEmitter();
        }
        /**
         * @param {?} event
         * @return {?}
         */
        elemntscrollTracker.prototype.onScroll = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            // do tracking
            // console.log('scrolled', event.target.scrollTop);
            // Listen to click events in the component
            /** @type {?} */
            var tracker = event.target;
            /** @type {?} */
            var endReachedVerticle = false;
            /** @type {?} */
            var endReachedHorizontal = false;
            /** @type {?} */
            var limitVerticle = tracker.scrollHeight - tracker.clientHeight;
            /** @type {?} */
            var limitHorizontal = tracker.scrollWidth - tracker.clientWidth;
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
                endReachedVerticle: endReachedVerticle,
                posHorizontal: event.target.scrollLeft,
                endReachedHorizontal: endReachedHorizontal
            });
        };
        elemntscrollTracker.decorators = [
            { type: core.Directive, args: [{
                        selector: '[elemntscrollTracker]',
                    },] }
        ];
        elemntscrollTracker.propDecorators = {
            scrolled: [{ type: core.Output }],
            onScroll: [{ type: core.HostListener, args: ['scroll', ['$event'],] }]
        };
        return elemntscrollTracker;
    }());
    if (false) {
        /** @type {?} */
        elemntscrollTracker.prototype.scrolled;
    }
    var htmlbodyscrollTracker = /** @class */ (function () {
        function htmlbodyscrollTracker() {
            this.bodyscrolled = new core.EventEmitter();
        }
        /**
         * @param {?} event
         * @return {?}
         */
        htmlbodyscrollTracker.prototype.onScroll = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            /** @type {?} */
            var verticalOffset = window.pageYOffset
                || document.documentElement.scrollTop
                || document.body.scrollTop || 0;
            /** @type {?} */
            var HorizontalOffset = window.pageXOffset
                || document.documentElement.scrollLeft
                || document.body.scrollLeft || 0;
            this.bodyscrolled.emit({
                verticalOffset: verticalOffset,
                HorizontalOffset: HorizontalOffset,
            });
        };
        htmlbodyscrollTracker.decorators = [
            { type: core.Directive, args: [{
                        selector: '[htmlbodyscrollTracker]',
                    },] }
        ];
        htmlbodyscrollTracker.propDecorators = {
            bodyscrolled: [{ type: core.Output }],
            onScroll: [{ type: core.HostListener, args: ['window:scroll', ['$event'],] }]
        };
        return htmlbodyscrollTracker;
    }());
    if (false) {
        /** @type {?} */
        htmlbodyscrollTracker.prototype.bodyscrolled;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/ng-scroll-detector.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgScrollDetectorModule = /** @class */ (function () {
        function NgScrollDetectorModule() {
        }
        NgScrollDetectorModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [NgScrollDetectorComponent, elemntscrollTracker, htmlbodyscrollTracker],
                        imports: [
                            common.CommonModule, platformBrowser.BrowserModule, forms.FormsModule, forms.ReactiveFormsModule
                        ],
                        exports: [NgScrollDetectorComponent, elemntscrollTracker, htmlbodyscrollTracker]
                    },] }
        ];
        return NgScrollDetectorModule;
    }());

    exports.NgScrollDetectorComponent = NgScrollDetectorComponent;
    exports.NgScrollDetectorModule = NgScrollDetectorModule;
    exports.NgScrollDetectorService = NgScrollDetectorService;
    exports.elemntscrollTracker = elemntscrollTracker;
    exports.htmlbodyscrollTracker = htmlbodyscrollTracker;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-scroll-detector.umd.js.map
