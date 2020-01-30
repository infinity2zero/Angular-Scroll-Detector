# Angular Scroll Detector
This angular library is for detecting scrollbar position of any html element as well as the scroll of whole 
document as well. This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.14.
##Demo
[Click here to see the demo](https://abhisu.com/ng-scroll-detector).
## Getting Started
### Prerequisites : #### There is no dependency at all, if you are using it in angular application

### Step 1 : Installation
```
run npm install ng-scroll-detector
```
### Step 2 : Consuming-- import the module.
```
import{NgScrollDetectorModule} from "ng-scroll-detector"
```
### Step 3 : Usages
#### Element Scroll detection
```
<div class="container" elemntscrollTracker (scrolled)="elementScrollEvt($event)" ></div>
//Subscribe to the event scrolled.
public elementScrolled(evt) {

}
//returned, evt is a JSON which has 
{
    posVerticle: Vertical position of the Scrollbar of the element,
    endReachedVerticle : true|false (If scroll bar reaches at end respectively),
    posHorizontal: Horizontal position of the Scrollbar of the element,
    endReachedHorizontal : true|false (If scroll bar reaches at end respectively)
}
```
#### Document|HTML|Body Scroll detection
#####Place the directive to any element and listen to its event.
```
<div class="container" htmlbodyscrollTracker (bodyscrolled)="bodyScrolled($event)"></div>
//Listen to the event scrolled.
public bodyScrolled(evt) {

}
//returned, evt is a JSON which has 
{
    verticalOffset: Vertical offset of the body,
    HorizontalOffset Horizontal offset of the body,
}
```
#### Checking if scrollbar is present in any html container element

```
<ng-scroll-detector [elementId]="'test'" (ifScroll)="ifScroll($event)"></ng-scroll-detector>
//Listen to the event scrolled.
public ifScroll(evt) {

}
//returned, evt is a JSON which has 
{
    elClientWidth,
    elScrollWidth,
    elScrollHeight,
    elClientHeight,
    isVs: is vertical scroll,
    isHs: is horizontal scroll
}
```


## Contributing
Please checkout the library repo.[GitHub](https://github.com/suryasharma06/Angular-Scroll-Detector)

## Authors

* **Surya Sharma** 

## License

This project is licensed under the [MIT](https://github.com/suryasharma06/Angular-Scroll-Detector/blob/master/LICENSE) License.



