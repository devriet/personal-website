import { Component, OnInit } from '@angular/core';
import { PageLink } from 'src/app/objects/page-link';
import { PROGRAMMING_PAGES } from 'src/app/pages/programming/programming-pages';
import { ArticleReference } from 'src/app/objects/article-reference';
import { ARTICLE_REFERENCES } from '../article-view/article-references';

@Component({
  selector: 'app-programming',
  templateUrl: './programming.component.html',
  styleUrls: ['./programming.component.css']
})
export class ProgrammingComponent implements OnInit {

  programmingPages: ArticleReference[];

  constructor() { }

  ngOnInit(): void {
    this.programmingPages = PROGRAMMING_PAGES.map((key: string):ArticleReference => {
      return ARTICLE_REFERENCES.get(key);
    });
  }

}
