import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PostService } from './post.service';
import { ReviewService } from './review.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RestsComponent } from './rests/rests.component';
import { DetailsComponent } from './details/details.component';
import { NewRestComponent } from './new-rest/new-rest.component';
import { NewReviewComponent } from './new-review/new-review.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { RestNewReviewComponent } from './rest-new-review/rest-new-review.component';
import { EditRestComponent } from './edit-rest/edit-rest.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RestsComponent,
    DetailsComponent,
    NewRestComponent,
    NewReviewComponent,
    ReviewsComponent,
    RestNewReviewComponent,
    EditRestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    PostService,
    ReviewService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
