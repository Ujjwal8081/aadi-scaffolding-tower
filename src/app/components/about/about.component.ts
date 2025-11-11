import { Component, OnInit, ViewChild } from '@angular/core';
import { ContactNowComponent } from '../contact-now/contact-now.component';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  @ViewChild(ContactNowComponent) contactNowDialog!: ContactNowComponent;

  constructor(private seoService: SeoService) {}

  ngOnInit() {
    this.seoService.updateMetaTags({
      title: 'About Us - ShrijanScaffolding Towers | 15+ Years Experience in Pratapgarh',
      description: 'ShrijanScaffolding Towers: Leading scaffolding company in Pratapgarh since 2005. ISO certified, 500+ projects completed, A+ safety rating. Trusted by construction professionals.',
      keywords: 'about ShrijanScaffolding, scaffolding company Pratapgarh, ISO certified scaffolding, trusted scaffolding supplier UP',
      canonical: 'https://shrijanscaffolding.com/about/about-us'
    });
  }

  openDialog() {
    this.contactNowDialog.openDialog();
  }
}
