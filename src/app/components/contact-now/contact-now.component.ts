import { Component, HostListener, Input } from '@angular/core';
import emailjs from '@emailjs/browser';

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

  @HostListener('document:keydown.escape', ['$event'])
  handleEscapeKey(event: KeyboardEvent) {
    if (this.isOpen) {
      this.closeDialog();
    }
  }

 sendEmail() {
    if (!this.userName || !this.userMobile) {
      alert('Please fill in both name and mobile number.');
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

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        alert('Message sent successfully!');
        this.userName = '';
        this.userMobile = '';
      })
      .catch((error) => {
        console.error('Send error:', error);
        alert('Failed to send message. Please try again later.');
      });
  }
}
