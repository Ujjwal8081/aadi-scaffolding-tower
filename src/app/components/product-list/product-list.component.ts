import { Component, ViewChild } from '@angular/core';
import { ContactNowComponent } from '../contact-now/contact-now.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @ViewChild(ContactNowComponent) contactNowDialog!: ContactNowComponent;

  products = [
    { id: 1, name: 'Aluminium Scaffolding', image: 'https://picsum.photos/300/300?random=1', description: 'High-quality aluminum scaffolding for construction and maintenance work.' },
    { id: 2, name: 'Aluminum Scaffolding', image: 'https://picsum.photos/300/300?random=2', description: 'Durable and lightweight scaffolding solution for all your needs.' },
    { id: 3, name: 'Scaffolding Tower', image: 'https://picsum.photos/300/300?random=3', description: 'Mobile scaffolding towers with excellent stability and safety features.' },
    { id: 4, name: 'Tank Ladder', image: 'https://picsum.photos/300/300?random=4', description: 'Specialized ladders designed for tank access and maintenance.' },
    { id: 5, name: 'Industrial Ladders', image: 'https://picsum.photos/300/300?random=5', description: 'Heavy-duty industrial ladders for professional applications.' },
    { id: 6, name: 'Mobile Aluminium', image: 'https://picsum.photos/300/300?random=6', description: 'Portable aluminum scaffolding with wheels for easy mobility.' },
    { id: 7, name: 'Hydraulic Scissor Lift', image: 'https://picsum.photos/300/300?random=7', description: 'Electric and hydraulic scissor lifts for height access solutions.' },
    { id: 8, name: 'Extension Ladder', image: 'https://picsum.photos/300/300?random=8', description: 'Extendable ladders for various height requirements.' }
  ];

  openDialog() {
    this.contactNowDialog.openDialog();
  }
}
