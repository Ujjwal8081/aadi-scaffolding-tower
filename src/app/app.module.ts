import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ContactNowComponent } from './components/contact-now/contact-now.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDescriptionComponent } from './components/product-description/product-description.component';
import { RatingAndReviewComponent } from './components/rating-and-review/rating-and-review.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ServicesComponent } from './components/ourServices/services.component';
import { MenubarModule } from 'primeng/menubar';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactUsComponent,
    ContactNowComponent,
    ProductListComponent,
    ProductDescriptionComponent,
    ServicesComponent,
    RatingAndReviewComponent,
    AboutUsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    MenubarModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
