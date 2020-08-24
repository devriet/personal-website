import { Component, OnInit, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ARTICLE_REFERENCES } from './article-references';
import { ArticleViewDirective } from './article-view.directive';
import { ArticleViewService } from './article-view.service';
import { Subject } from 'rxjs';
import { takeUntil, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.css']
})
export class ArticleViewComponent implements OnInit {

  parentPage: string = '';
  pageTitle: string = 'Error Loading Sub-Page';
  page: string;

  @ViewChild(ArticleViewDirective, {static: true})
  articleView: ArticleViewDirective;

  private destroySubject = new Subject();

  constructor(
    private articleViewService: ArticleViewService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // this.articleViewService.loadComponent(viewContainerRef);
    
    this.route.paramMap.pipe(
      takeUntil(this.destroySubject),
      mergeMap(paramMap =>
        this.loadComponent(paramMap.get('page'))
      )
    ).subscribe();
  }

  ngOnDestroy() {
    this.destroySubject.next();
    this.destroySubject.complete();
  }

  loadComponent(page: string) {
    const articleReference = [ ...ARTICLE_REFERENCES.values()].find(e => e.pagePath === page);

    this.parentPage = articleReference.parentPath;
    this.pageTitle = articleReference.pageTitle;

    const viewContainerRef = this.articleView.viewContainerRef;

    return this.articleViewService.loadComponent(viewContainerRef, articleReference.component);
  }
}
