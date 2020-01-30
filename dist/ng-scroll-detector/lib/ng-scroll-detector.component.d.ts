import { OnInit, EventEmitter, AfterViewChecked, OnChanges, SimpleChanges } from '@angular/core';
export declare class NgScrollDetectorComponent implements OnInit, AfterViewChecked, OnChanges {
    elementId: string;
    ifScroll: EventEmitter<any>;
    constructor();
    ngOnInit(): void;
    ngAfterViewChecked(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ifScrollBar(): void;
}
