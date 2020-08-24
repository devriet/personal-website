import { Injectable, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleViewService {

  constructor(private cfr: ComponentFactoryResolver) { }

  async loadComponent(vcr: ViewContainerRef, component: any) {
    // const { StickyFooterComponent } = await import('../programming/programming-pages/sticky-footer/sticky-footer.component')
    
    vcr.clear();
    // let component = StickyFooterComponent;

    return vcr.createComponent(
      this.cfr.resolveComponentFactory(component))
  }
}
