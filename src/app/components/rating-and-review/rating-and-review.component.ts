import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-rating-and-review',
  templateUrl: './rating-and-review.component.html',
  styleUrls: ['./rating-and-review.component.css']
})
export class RatingAndReviewComponent {
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
      name: 'Satheesh',
      location: 'Nalgonda, Telangana',
      rating: 5,
      productName: 'Mobile Scaffold Tower',
      comment: ''
    },
    {
      avatar: 'S',
      name: 'SYED IMRAN',
      location: 'Anantapur, Andhra Pradesh',
      rating: 5,
      productName: 'Scaffold Ladder',
      comment: ''
    },
    {
      avatar: 'B',
      name: 'BV Balaji',
      location: 'Hyderabad, Telangana',
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

    customOptions: OwlOptions = {
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
}
