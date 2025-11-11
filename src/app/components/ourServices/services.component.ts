import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  constructor(private seoService: SeoService) {}

  ngOnInit() {
    this.seoService.updateMetaTags({
      title: 'Scaffolding Services - Rental, Installation, Maintenance | Aadi Scaffolding Towers',
      description: 'Professional scaffolding services in Pratapgarh: rental, installation, maintenance, 24/7 support. Experienced team, safety certified. Call +91-8416839999',
      keywords: 'scaffolding rental Pratapgarh, scaffolding installation services, scaffolding maintenance, scaffolding repair, emergency scaffolding services UP',
      canonical: 'https://shrijanscaffolding.com/services'
    });
  }
}
