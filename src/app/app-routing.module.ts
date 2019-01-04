import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TechnologyComponent } from './technology/technology.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { InvalidRequestComponent } from './invalid-request/invalid-request.component';

const routes: Routes = [
  {path : 'tech', component:TechnologyComponent},
  {path : 'sub' ,component:SubjectsComponent},
  {path: '**',component:InvalidRequestComponent},
  {path:'',component:TechnologyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
