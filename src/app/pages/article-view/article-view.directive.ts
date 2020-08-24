import { ViewContainerRef, Directive } from '@angular/core';

@Directive({
    selector: '[articleViewDirective]'
})
export class ArticleViewDirective {
    constructor(public viewContainerRef: ViewContainerRef) { }
}