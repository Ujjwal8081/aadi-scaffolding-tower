import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RatingAndReviewComponent } from './components/rating-and-review/rating-and-review.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ServicesComponent } from './components/ourServices/services.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { DownloadBrochureComponent } from './components/download-brochure/download-brochure.component';
import { OurVisionComponent } from './components/our-vision/our-vision.component';
import { AboutComponent } from './components/about/about.component';
import { ContactNowComponent } from './components/contact-now/contact-now.component';


const routes: Routes = [
   { path: '', component: HomeComponent },
   { path: 'home', component: HomeComponent },
   { 
     path: 'about', 
     component: AboutUsComponent,
     children: [
       { path: '', redirectTo: 'about-us', pathMatch: 'full' },
       { path: 'about-us', component: AboutComponent },
       { path: 'review-and-rating', component: RatingAndReviewComponent },
       { path: 'our-vision', component: OurVisionComponent },
       { path: 'download-brochure', component: DownloadBrochureComponent }
     ]
   },
   { path: 'product-list', component: ProductListComponent },
   { path: 'services', component: ServicesComponent },
   { path: 'contact-us', component: ContactUsComponent },
   { path: 'contact-now', component: ContactNowComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
