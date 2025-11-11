import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent implements OnInit {
  userName: string = '';
  userMobile: string = '';
  userEmail: string = '';
  userMessage: string = '';

  constructor(private seoService: SeoService) {}

  ngOnInit() {
    this.seoService.updateMetaTags({
      title: 'Contact Us - ShrijanScaffolding Towers | Call +91-8416839999',
      description:
        'Contact ShrijanScaffolding Towers in Pratapgarh. Address: Jail Road, Achalpur, Vikash Nagar. Phone: +91-8416839999. Email: aadicu@zohomail.in. Get free quotes!',
      keywords:
        'contact scaffolding company Pratapgarh, scaffolding supplier contact, scaffolding rental enquiry, get scaffolding quote',
      canonical: 'https://shrijanscaffolding.com/contact-us',
    });
  }

  sendEmail() {
    if (
      !this.userName ||
      !this.userMobile ||
      !this.userEmail ||
      !this.userMessage
    ) {
      Swal.fire({
        icon: 'warning',
        title: 'Missing Information',
        text: 'Please fill all the fields',
        confirmButtonColor: '#2563eb',
      });
      return;
    }
    const templateID = 'template_dzth066';
    const serviceID = 'service_tie7kgg';
    const publicKey = 'WUFoUDKYnHHPap1qU';

    const templateParams = {
      userName: this.userName,
      userMobile: this.userMobile,
      userEmail: this.userEmail,
      userMessage: this.userMessage,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Message sent successfully! We will contact you soon.',
          confirmButtonColor: '#2563eb',
        });
        this.userName = '';
        this.userMobile = '';
        this.userEmail = '';
        this.userMessage = '';
      })
      .catch((error) => {
        console.error('❌ Send error:', error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Failed to send message. Please try again later.',
          confirmButtonColor: '#2563eb',
        });
      });
  }
}
