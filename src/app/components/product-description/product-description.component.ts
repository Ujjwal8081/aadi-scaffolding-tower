import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactNowComponent } from '../contact-now/contact-now.component';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {
  @ViewChild(ContactNowComponent) contactNowDialog!: ContactNowComponent;

  product: any;
  selectedImage: string = '';
  productImages: string[] = [];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.product = window.history.state.product;
    if (!this.product) {
      // Redirect back if no product data
      this.product = {
        id: 1,
        name: 'Aluminium Scaffolding',
        image: 'assets/images/aluminium-Scaffolding.jpg',
        description: 'High-quality aluminum scaffolding for construction and maintenance work.',
        price: 15999,
        originalPrice: 19999,
        rating: 4.5,
        reviews: 120,
        features: ['Lightweight', 'Easy assembly', 'High load capacity'],
        specifications: { material: 'Aluminum', weight: '25 kg' },
        sizes: [{ height: '50m', price: 12999 }]
      };
    }
    
    // Use product images array if available, otherwise use main image 4 times
    this.productImages = this.product?.images || [
      this.product?.image || 'assets/images/aluminium-Scaffolding.jpg',
      this.product?.image || 'assets/images/aluminium-Scaffolding.jpg',
      this.product?.image || 'assets/images/aluminium-Scaffolding.jpg',
      this.product?.image || 'assets/images/aluminium-Scaffolding.jpg'
    ];
    
    // Set first image as selected by default
    this.selectedImage = this.productImages[0];
  }

  openDialog() {
    this.contactNowDialog.openDialog();
  }

  calculateDiscount(): number {
    if (this.product?.price && this.product?.originalPrice) {
      return Math.round(((this.product.originalPrice - this.product.price) / this.product.originalPrice) * 100);
    }
    return 0;
  }

  goBack() {
    this.router.navigate(['/product-list']);
  }

  selectImage(image: string) {
    this.selectedImage = image;
  }
}
