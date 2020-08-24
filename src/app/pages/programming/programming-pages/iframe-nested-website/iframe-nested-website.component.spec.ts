import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IframeNestedWebsiteComponent } from './iframe-nested-website.component';

describe('IframeNestedWebsiteComponent', () => {
  let component: IframeNestedWebsiteComponent;
  let fixture: ComponentFixture<IframeNestedWebsiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IframeNestedWebsiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IframeNestedWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
