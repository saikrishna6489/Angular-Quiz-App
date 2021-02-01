import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "../app/home/home.component";
import { QuizComponent } from "../app/quiz/quiz.component";
import { ReviewAndResultComponent } from "../app/review-and-result/review-and-result.component";


const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'quiz', component:QuizComponent},
  {path:'reviewAndResult', component:ReviewAndResultComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ ]
})
export class AppRoutingModule { }
