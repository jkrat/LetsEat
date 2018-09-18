import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { RestsComponent } from './rests/rests.component';
import { NewRestComponent } from './new-rest/new-rest.component';
import { NewReviewComponent } from './new-review/new-review.component';
import { RestNewReviewComponent } from './rest-new-review/rest-new-review.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { EditRestComponent } from './edit-rest/edit-rest.component';

const routes: Routes = [
  { path: '', redirectTo: 'restaurants', pathMatch: 'full' },
  { path: 'restaurants', component: RestsComponent },
  { path: 'restaurants/reviews', component: ReviewsComponent },
  { path: 'restaurants/reviews/new', component: NewReviewComponent },
  { path: 'restaurants/reviews/:id',   redirectTo: 'restaurants/:id', pathMatch: 'full' },
  { path: 'restaurants/new', component: NewRestComponent },
  { path: 'restaurants/:id', component: DetailsComponent },
  { path: 'restaurants/:id/review', component: RestNewReviewComponent },
  { path: 'restaurants/:id/edit', component: EditRestComponent },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
