import { StickyFooterComponent } from '../programming/programming-pages/sticky-footer/sticky-footer.component';
import { ArticleReference } from 'src/app/objects/article-reference';
import { DarkThemeComponent } from '../programming/programming-pages/dark-theme/dark-theme.component';
import { IframeNestedWebsiteComponent } from '../programming/programming-pages/iframe-nested-website/iframe-nested-website.component';
import { DynamicComponentsComponent } from '../programming/programming-pages/dynamic-components/dynamic-components.component';

export const ARTICLE_REFERENCES: Map<string, ArticleReference> = new Map([
    ['sticky-footer', {pageTitle: 'Angular Sticky Footer Example', pagePath: 'angular-sticky-footer-example', parentPath: '/programming', component: StickyFooterComponent}],
    ['dynamic-components', {pageTitle: 'Angular Dynamically Loaded Components', pagePath: 'angular-dynamically-loaded-components', parentPath: '/programming', component: DynamicComponentsComponent}],
    ['dark-theme', {pageTitle: 'Angular Dark and Light Themes With Toggle', pagePath: 'angular-dark-and-light-themes-with-toggle', parentPath: '/programming', component: DarkThemeComponent}],
    ['iframe-nested-website', {pageTitle: 'Angular "Website Within a Website" Using IFrame', pagePath: 'angular-website-within-a-website-using-iframe', parentPath: '/programming', component: IframeNestedWebsiteComponent}]
]);