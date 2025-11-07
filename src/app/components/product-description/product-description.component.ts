import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactNowComponent } from '../contact-now/contact-now.component';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {
  @ViewChild(ContactNowComponent) contactNowDialog!: ContactNowComponent;

  product: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Get product data from route params or state
    this.product = window.history.state.product || {
      id: 1,
      name: 'Aluminium Scaffolding',
      image: 'assets/images/aluminium-Scaffolding.jpg',
      description: 'High-quality aluminum scaffolding for construction and maintenance work.'
    };
  }

  openDialog() {
    this.contactNowDialog.openDialog();
  }
}
