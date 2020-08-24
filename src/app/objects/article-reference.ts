import { Type } from '@angular/core';

export interface ArticleReference {
    pageTitle: string;
    pagePath: string;
    parentPath: string;
    component: Type<any>;
}