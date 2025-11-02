import { Component, ViewEncapsulation } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent {

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
