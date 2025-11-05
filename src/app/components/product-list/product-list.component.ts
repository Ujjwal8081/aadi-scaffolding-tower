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
    { id: 1, name: 'Aluminium Scaffolding', image: 'assets/images/aluminium-Scaffolding.jpg', description: 'High-quality aluminum scaffolding for construction and maintenance work.' },
    { id: 2, name: 'Bigger Aluminum Scaffolding', image: 'assets/images/bigger-aluminium-scaffolding.jpg', description: 'Durable and lightweight scaffolding solution for all your needs.' },
    { id: 3, name: 'Scaffolding Tower', image: 'assets/images/scaffold-tower.jpg', description: 'Mobile scaffolding towers with excellent stability and safety features.' },
    { id: 4, name: 'Tank Ladder', image: 'assets/images/tank-ladder.jpg', description: 'Specialized ladders designed for tank access and maintenance.' },
    { id: 5, name: 'Industrial Ladders', image: 'assets/images/industrial-ladder.jpg', description: 'Heavy-duty industrial ladders for professional applications.' },
    { id: 6, name: 'Mobile Aluminium Scaffolding', image: 'assets/images/mobile-scaffolding.png', description: 'Portable aluminum scaffolding with wheels for easy mobility.' },
    { id: 7, name: 'Hydraulic Scissor Lift', image: 'assets/images/hydraulic-scissor-lifts.png', description: 'Electric and hydraulic scissor lifts for height access solutions.' },
    { id: 8, name: 'Extension Ladder', image: 'assets/images/extension-ladder.jpg', description: 'Extendable ladders for various height requirements.' }
  ];

  openDialog() {
    this.contactNowDialog.openDialog();
  }
}
