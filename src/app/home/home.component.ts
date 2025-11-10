import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ContactNowComponent } from '../components/contact-now/contact-now.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent {
  @ViewChild(ContactNowComponent) contactNowDialog!: ContactNowComponent;

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

 Math = Math;
  
  overallRating = 4.5;
  totalReviews = 16;

  ratingBreakdown = [
    { stars: 5, percentage: 85 },
    { stars: 4, percentage: 42 },
    { stars: 3, percentage: 10 },
    { stars: 2, percentage: 13 },
    { stars: 1, percentage: 9 }
  ];

  userSatisfaction = [
    { label: 'Response', percentage: 100, color: '#22c55e' },
    { label: 'Quality', percentage: 100, color: '#22c55e' },
    { label: 'Delivery', percentage: 100, color: '#22c55e' }
  ];

  reviews = [
    {
      avatar: 'S',
      name: 'Janhvi construction',
      // location: 'Nalgonda, Telangana',
      rating: 5,
      productName: 'Mobile Scaffold Tower',
      comment: ''
    },
    {
      avatar: 'S',
      name: 'Awadh construction',
      // location: 'Anantapur, Andhra Pradesh',
      rating: 5,
      productName: 'Scaffold Ladder',
      comment: ''
    },
    {
      avatar: 'B',
      name: 'Vaidehi industries',
      // location: 'Hyderabad, Telangana',
      rating: 5,
      productName: 'Mobile Scaffold Tower',
      comment: 'Best Vendor in supplying of Aluminium Mobile Scaffolding'
    },
    {
      avatar: 'B',
      name: 'Shrijan infratech',
      // location: 'Hyderabad, Telangana',
      rating: 5,
      productName: 'Mobile Scaffold Tower',
      comment: 'Best Vendor in supplying of Aluminium Mobile Scaffolding'
    },
    {
      avatar: 'B',
      name: 'T.H.S construction',
      // location: 'Hyderabad, Telangana',
      rating: 5,
      productName: 'Mobile Scaffold Tower',
      comment: 'Best Vendor in supplying of Aluminium Mobile Scaffolding'
    },
    {
      avatar: 'B',
      name: 'Shree construction',
      // location: 'Hyderabad, Telangana',
      rating: 5,
      productName: 'Mobile Scaffold Tower',
      comment: 'Best Vendor in supplying of Aluminium Mobile Scaffolding'
    }
  ];

    testimonials = [
    { message: "I am very happy with the Piping Design and Training they provide. I love their commitment and professionalism. I would like to make sure happy by the help of EPC Engineers Pvt Ltd Noida. Thanks", name: "Subhasis Dev",  src:'subhasis.jpg' },
    { message: "Communication with EPC-Engineers is one of the great moments of my life. Me and my friends has enjoyed the Training programms by them. The staffs of EPC Engineers are very friendly and helpful. Thanks to make me memorable", name: "Anand Vacaro", src:'anand.jpg' },
    { message: "Great Training Experience with EPC Engineers Pvt Ltd all team are Supportive and helpful Thanks A Lot.", name: "Geeta Singh", src:'geeta.png' },
    { message: "I have joined Online Instrumentation Design Engineering Training. I got the Best one to one training session with experienced Faculty. Trainer has sound knowledge on Engineering Calculation and Software.", name: "Keshav Sama", src:'keshav.jpg'},
    { message: "I am totally amazed with the Autocad Training by the friendly staffs of EPC Engineers, I am very happy with their Courses and faculty, will like to recommend it to our family and friends, thanks for the Amazing training Institute.", name: "Shashank Mehta", src:'shashank-mehta.jpg' },
  ];

    customOptions1: OwlOptions = {
    loop: true,
    autoplay: false,
    margin: 20,
    nav: false,
    center: true,
    dots: true,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 }
    }
  };

  openDialog() {
    this.contactNowDialog.openDialog();
  }
}

