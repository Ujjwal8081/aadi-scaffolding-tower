import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

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
import { FooterComponent } from './components/footer/footer.component';
import { OurVisionComponent } from './components/our-vision/our-vision.component';
import { DownloadBrochureComponent } from './components/download-brochure/download-brochure.component';
import { AboutComponent } from './components/about/about.component';
import { FormsModule } from '@angular/forms';

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
    HomeComponent,
    FooterComponent,
    OurVisionComponent,
    DownloadBrochureComponent,
    AboutComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MenubarModule,
    AppRoutingModule,
    CarouselModule,
    SweetAlert2Module.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
