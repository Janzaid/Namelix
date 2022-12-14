import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { ResturentComponent } from './resturent/resturent.component';
import { UniversityComponent } from './university/university.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movie', component: MovieComponent },
  { path: 'resturent', component: ResturentComponent },
  { path: 'university', component: UniversityComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
