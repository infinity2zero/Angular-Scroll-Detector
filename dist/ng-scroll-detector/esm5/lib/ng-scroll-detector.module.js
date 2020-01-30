/**
 * @fileoverview added by tsickle
 * Generated from: lib/ng-scroll-detector.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgScrollDetectorComponent } from './ng-scroll-detector.component';
import { elemntscrollTracker, htmlbodyscrollTracker } from './ng-scroll.directive';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
var NgScrollDetectorModule = /** @class */ (function () {
    function NgScrollDetectorModule() {
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
    return NgScrollDetectorModule;
}());
export { NgScrollDetectorModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctc2Nyb2xsLWRldGVjdG9yLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXNjcm9sbC1kZXRlY3Rvci8iLCJzb3VyY2VzIjpbImxpYi9uZy1zY3JvbGwtZGV0ZWN0b3IubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDM0UsT0FBTyxFQUFFLG1CQUFtQixFQUFDLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDbEYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUMsbUJBQW1CLEVBQUcsTUFBTSxnQkFBZ0IsQ0FBQztBQUdsRTtJQUFBO0lBT3NDLENBQUM7O2dCQVB0QyxRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMseUJBQXlCLEVBQUUsbUJBQW1CLEVBQUMscUJBQXFCLENBQUM7b0JBQ3BGLE9BQU8sRUFBRTt3QkFDUCxZQUFZLEVBQUUsYUFBYSxFQUFDLFdBQVcsRUFBQyxtQkFBbUI7cUJBQzVEO29CQUNELE9BQU8sRUFBRSxDQUFDLHlCQUF5QixFQUFDLG1CQUFtQixFQUFDLHFCQUFxQixDQUFDO2lCQUMvRTs7SUFDcUMsNkJBQUM7Q0FBQSxBQVB2QyxJQU91QztTQUExQixzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdTY3JvbGxEZXRlY3RvckNvbXBvbmVudCB9IGZyb20gJy4vbmctc2Nyb2xsLWRldGVjdG9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBlbGVtbnRzY3JvbGxUcmFja2VyLGh0bWxib2R5c2Nyb2xsVHJhY2tlciB9IGZyb20gJy4vbmctc2Nyb2xsLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsUmVhY3RpdmVGb3Jtc01vZHVsZSAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbTmdTY3JvbGxEZXRlY3RvckNvbXBvbmVudCwgZWxlbW50c2Nyb2xsVHJhY2tlcixodG1sYm9keXNjcm9sbFRyYWNrZXJdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLCBCcm93c2VyTW9kdWxlLEZvcm1zTW9kdWxlLFJlYWN0aXZlRm9ybXNNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW05nU2Nyb2xsRGV0ZWN0b3JDb21wb25lbnQsZWxlbW50c2Nyb2xsVHJhY2tlcixodG1sYm9keXNjcm9sbFRyYWNrZXJdXG59KVxuZXhwb3J0IGNsYXNzIE5nU2Nyb2xsRGV0ZWN0b3JNb2R1bGUgeyB9XG4iXX0=