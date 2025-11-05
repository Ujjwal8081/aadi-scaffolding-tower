import { Component, HostListener, Input } from '@angular/core';

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
}
