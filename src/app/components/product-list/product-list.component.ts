import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactNowComponent } from '../contact-now/contact-now.component';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @ViewChild(ContactNowComponent) contactNowDialog!: ContactNowComponent;

  products = [
    { 
      id: 1, 
      name: 'Aluminium Scaffolding', 
      image: 'assets/images/aluminium-Scaffolding.jpg',
      images: [
        'assets/images/aluminium-Scaffolding.jpg',
        'assets/images/aluminium-Scaffolding.jpg',
        'assets/images/aluminium-Scaffolding.jpg',
        'assets/images/aluminium-Scaffolding.jpg'
      ],
      description: 'High-quality aluminum scaffolding for construction and maintenance work.',
      price: 15999,
      originalPrice: 19999,
      rating: 4.5,
      reviews: 120,
      features: [
        'Lightweight aluminum construction',
        'Easy to assemble and dismantle',
        'High load capacity and stability',
        'Weather-resistant coating',
        'Complies with safety standards'
      ],
      specifications: {
        material: 'Aluminum Alloy',
        weight: '25 kg',
        loadCapacity: '150 kg',
        warranty: '2 Years'
      },
      sizes: [
        { height: '50m', price: 12999 },
        { height: '100m', price: 22999 },
        { height: '150m', price: 32999 },
        { height: '200m', price: 42999 }
      ]
    },
    { 
      id: 2, 
      name: 'Bigger Aluminum Scaffolding', 
      image: 'assets/images/bigger-aluminium-scaffolding.jpg',
      images: [
        'assets/images/bigger-aluminium-scaffolding.jpg',
        'assets/images/bigger-aluminium-scaffolding.jpg',
        'assets/images/bigger-aluminium-scaffolding.jpg',
        'assets/images/bigger-aluminium-scaffolding.jpg'
      ],
      description: 'Durable and lightweight scaffolding solution for all your needs.',
      price: 18999,
      originalPrice: 23999,
      rating: 4.7,
      reviews: 95,
      features: [
        'Heavy-duty aluminum frame',
        'Enhanced stability system',
        'Quick-lock mechanism',
        'Corrosion-resistant finish',
        'International safety certified'
      ],
      specifications: {
        material: 'Premium Aluminum',
        weight: '32 kg',
        loadCapacity: '200 kg',
        warranty: '3 Years'
      },
      sizes: [
        { height: '50m', price: 15999 },
        { height: '100m', price: 28999 },
        { height: '150m', price: 39999 },
        { height: '200m', price: 52999 }
      ]
    },
    { 
      id: 3, 
      name: 'Scaffolding Tower', 
      image: 'assets/images/scaffold-tower.jpg',
      images: [
        'assets/images/scaffold-tower.jpg',
        'assets/images/scaffold-tower.jpg',
        'assets/images/scaffold-tower.jpg',
        'assets/images/scaffold-tower.jpg'
      ],
      description: 'Mobile scaffolding towers with excellent stability and safety features.',
      price: 21999,
      originalPrice: 26999,
      rating: 4.6,
      reviews: 88,
      features: [
        'Mobile tower design',
        'Lockable wheels for stability',
        'Adjustable height options',
        'Anti-slip platforms',
        'Easy assembly process'
      ],
      specifications: {
        material: 'Aluminum & Steel',
        weight: '45 kg',
        loadCapacity: '250 kg',
        warranty: '2 Years'
      },
      sizes: [
        { height: '50m', price: 18999 },
        { height: '100m', price: 32999 },
        { height: '150m', price: 45999 },
        { height: '200m', price: 58999 }
      ]
    },
    { 
      id: 4, 
      name: 'Tank Ladder', 
      image: 'assets/images/tank-ladder.jpg',
      images: [
        'assets/images/tank-ladder.jpg',
        'assets/images/tank-ladder.jpg',
        'assets/images/tank-ladder.jpg',
        'assets/images/tank-ladder.jpg'
      ],
      description: 'Specialized ladders designed for tank access and maintenance.',
      price: 8999,
      originalPrice: 11999,
      rating: 4.4,
      reviews: 67,
      features: [
        'Heavy-duty construction',
        'Anti-slip rungs',
        'Rust-resistant coating',
        'Safety cage included',
        'Customizable height'
      ],
      specifications: {
        material: 'Aluminum',
        weight: '18 kg',
        loadCapacity: '120 kg',
        warranty: '1 Year'
      },
      sizes: [
        { height: '50m', price: 7999 },
        { height: '100m', price: 13999 },
        { height: '150m', price: 19999 },
        { height: '200m', price: 25999 }
      ]
    },
    { 
      id: 5, 
      name: 'Industrial Ladders', 
      image: 'assets/images/industrial-ladder.jpg',
      images: [
        'assets/images/industrial-ladder.jpg',
        'assets/images/industrial-ladder.jpg',
        'assets/images/industrial-ladder.jpg',
        'assets/images/industrial-ladder.jpg'
      ],
      description: 'Heavy-duty industrial ladders for professional applications.',
      price: 6999,
      originalPrice: 8999,
      rating: 4.5,
      reviews: 145,
      features: [
        'Industrial-grade material',
        'Non-slip feet',
        'Foldable design',
        'Lightweight yet sturdy',
        'Multi-purpose usage'
      ],
      specifications: {
        material: 'Aluminum',
        weight: '12 kg',
        loadCapacity: '150 kg',
        warranty: '1 Year'
      },
      sizes: [
        { height: '50m', price: 5999 },
        { height: '100m', price: 9999 },
        { height: '150m', price: 13999 },
        { height: '200m', price: 17999 }
      ]
    },
    { 
      id: 6, 
      name: 'Mobile Aluminium Scaffolding', 
      image: 'assets/images/mobile-scaffolding.png',
      images: [
        'assets/images/mobile-scaffolding.png',
        'assets/images/mobile-scaffolding.png',
        'assets/images/mobile-scaffolding.png',
        'assets/images/mobile-scaffolding.png'
      ],
      description: 'Portable aluminum scaffolding with wheels for easy mobility.',
      price: 24999,
      originalPrice: 29999,
      rating: 4.8,
      reviews: 102,
      features: [
        'Four-wheel mobility system',
        'Brake locks for safety',
        'Lightweight aluminum frame',
        'Tool-free assembly',
        'Compact storage'
      ],
      specifications: {
        material: 'Aluminum',
        weight: '38 kg',
        loadCapacity: '200 kg',
        warranty: '3 Years'
      },
      sizes: [
        { height: '50m', price: 21999 },
        { height: '100m', price: 38999 },
        { height: '150m', price: 52999 },
        { height: '200m', price: 65999 }
      ]
    },
    { 
      id: 7, 
      name: 'Hydraulic Scissor Lift', 
      image: 'assets/images/hydraulic-scissor-lifts.png',
      images: [
        'assets/images/hydraulic-scissor-lifts.png',
        'assets/images/hydraulic-scissor-lifts.png',
        'assets/images/hydraulic-scissor-lifts.png',
        'assets/images/hydraulic-scissor-lifts.png'
      ],
      description: 'Electric and hydraulic scissor lifts for height access solutions.',
      price: 89999,
      originalPrice: 109999,
      rating: 4.9,
      reviews: 56,
      features: [
        'Hydraulic power system',
        'Electric operation',
        'Multiple height settings',
        'Safety railings included',
        'Heavy-duty platform'
      ],
      specifications: {
        material: 'Steel & Aluminum',
        weight: '350 kg',
        loadCapacity: '500 kg',
        warranty: '5 Years'
      },
      sizes: [
        { height: '50m', price: 79999 },
        { height: '100m', price: 129999 },
        { height: '150m', price: 179999 },
        { height: '200m', price: 229999 }
      ]
    },
    { 
      id: 8, 
      name: 'Extension Ladder', 
      image: 'assets/images/extension-ladder.jpg',
      images: [
        'assets/images/extension-ladder.jpg',
        'assets/images/extension-ladder.jpg',
        'assets/images/extension-ladder.jpg',
        'assets/images/extension-ladder.jpg'
      ],
      description: 'Extendable ladders for various height requirements.',
      price: 4999,
      originalPrice: 6999,
      rating: 4.3,
      reviews: 178,
      features: [
        'Extendable design',
        'Locking mechanism',
        'Slip-resistant rungs',
        'Compact when folded',
        'Easy to transport'
      ],
      specifications: {
        material: 'Aluminum',
        weight: '15 kg',
        loadCapacity: '130 kg',
        warranty: '1 Year'
      },
      sizes: [
        { height: '50m', price: 3999 },
        { height: '100m', price: 6999 },
        { height: '150m', price: 9999 },
        { height: '200m', price: 12999 }
      ]
    }
  ];

  constructor(private router: Router, private seoService: SeoService) {}

  ngOnInit() {
    this.seoService.updateMetaTags({
      title: 'Scaffolding Products - Aluminium Scaffolding, Ladders, Mobile Towers | Aadi Scaffolding',
      description: 'Browse our range of premium scaffolding products: aluminium scaffolding, mobile towers, industrial ladders, hydraulic lifts. Best prices in Pratapgarh. ISO certified quality.',
      keywords: 'buy scaffolding, aluminium scaffolding price, mobile scaffolding tower, industrial ladder price, hydraulic scissor lift, scaffolding products Pratapgarh',
      canonical: 'https://shrijanscaffolding.com/product-list'
    });
  }

  viewProduct(product: any) {
    this.router.navigate(['/product-description'], { state: { product } });
  }

  openDialog() {
    this.contactNowDialog.openDialog();
  }
}
