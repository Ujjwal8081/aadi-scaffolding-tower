import { Component, ViewEncapsulation } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent {

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


   slides = [
    { id: 1, img: 'banner1.jpg', title: 'You have reached the right place. Click the below button to get the free quote.' },
    { id: 2, img: 'banner2.jpg', title: 'You have reached the right place. Click the below button to get the free quote.' },
    { id: 3, img: 'banner3.jpg', title: 'You have reached the right place. Click the below button to get the free quote.' },
  ];

  customOptions: OwlOptions = {
    loop: true,
    margin: 10,
    nav: true,
    navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
    dots: false,
    autoplay: true,
    autoplaySpeed: 1000,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 1 },
      600: { items: 1 },
      1000: { items: 1 }
    },
  };

}
