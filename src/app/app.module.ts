import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderNavComponent } from './header/header-nav/header-nav.component';
import { BioComponent } from './pages/bio/bio.component';
import { ProgrammingComponent } from './pages/programming/programming.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { HobbiesComponent } from './pages/hobbies/hobbies.component';
import { StickyFooterComponent } from './pages/programming/programming-pages/sticky-footer/sticky-footer.component';
import { ArticleViewComponent } from './pages/article-view/article-view.component';
import { DarkThemeComponent } from './pages/programming/programming-pages/dark-theme/dark-theme.component';
import { IframeNestedWebsiteComponent } from './pages/programming/programming-pages/iframe-nested-website/iframe-nested-website.component';
import { ArticleViewDirective } from './pages/article-view/article-view.directive';
import { DynamicComponentsComponent } from './pages/programming/programming-pages/dynamic-components/dynamic-components.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeaderNavComponent,
    BioComponent,
    ProgrammingComponent,
    ExperienceComponent,
    HobbiesComponent,
    ArticleViewComponent,
    ArticleViewDirective,
    StickyFooterComponent,
    DarkThemeComponent,
    IframeNestedWebsiteComponent,
    DynamicComponentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
