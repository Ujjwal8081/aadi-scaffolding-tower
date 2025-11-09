import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent {
  userName: string = '';
  userMobile: string = '';
  userEmail: string = '';
  userMessage: string = '';

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

    emailjs.send(serviceID, templateID, templateParams, publicKey)
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
