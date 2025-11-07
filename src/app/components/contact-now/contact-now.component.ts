import { Component, HostListener, Input } from '@angular/core';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-now',
  templateUrl: './contact-now.component.html',
  styleUrls: ['./contact-now.component.css']
})
export class ContactNowComponent {
  @Input() navbarMenu: boolean = false;
  name: string = '';
  email: string = '';
  message: string = '';
  isOpen: boolean = false;

  userName: string = '';
  userMobile: string = '';

  onSubmit() {
    // Handle form submission logic here
    console.log('Form submitted:', this.name, this.email, this.message);
  }

  openDialog() {
    this.isOpen = true;
  }

  closeDialog() {
    this.isOpen = false;
  }

  @HostListener('document:keydown.escape')
  handleEscapeKey() {
    if (this.isOpen) {
      this.closeDialog();
    }
  }

  sendEmail() {
    if (!this.userName || !this.userMobile) {
      Swal.fire({
        icon: 'warning',
        title: 'Missing Information',
        text: 'Please fill in both name and mobile number.',
        confirmButtonColor: '#2563eb'
      });
      return;
    }

    const serviceID = 'service_tie7kgg';      // your EmailJS service ID
    const templateID = 'template_kfefhig';    // your EmailJS template ID
    const publicKey = 'WUFoUDKYnHHPap1qU';    // your EmailJS public key

    // This must match your EmailJS template variable names
    const templateParams = {
      userName: this.userName,
      userMobile: this.userMobile,
    };

    // Show loading
    Swal.fire({
      title: 'Sending...',
      text: 'Please wait while we send your message.',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Message sent successfully! We will contact you soon.',
          confirmButtonColor: '#2563eb'
        });
        this.userName = '';
        this.userMobile = '';
        this.closeDialog();
      })
      .catch((error) => {
        console.error('Send error:', error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Failed to send message. Please try again later.',
          confirmButtonColor: '#2563eb'
        });
      });
  }
}
