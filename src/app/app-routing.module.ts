import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BioComponent } from './pages/bio/bio.component';
import { ProgrammingComponent } from './pages/programming/programming.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { HobbiesComponent } from './pages/hobbies/hobbies.component';
import { ArticleViewComponent } from './pages/article-view/article-view.component';


const routes: Routes = [
  {path: '', redirectTo: '/bio', pathMatch: 'full'},
  {path: 'bio', component: BioComponent},
  {path: 'programming', component: ProgrammingComponent},
  {path: 'experience', component: ExperienceComponent},
  {path: 'hobbies', component: HobbiesComponent},
  {path: 'programming/:page', component: ArticleViewComponent}
  // {path: 'test', component: ArticleViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
