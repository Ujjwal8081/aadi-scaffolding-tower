import { Component, ViewChild } from '@angular/core';
import { ContactNowComponent } from '../contact-now/contact-now.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  @ViewChild(ContactNowComponent) contactNowDialog!: ContactNowComponent;

  openDialog() {
    this.contactNowDialog.openDialog();
  }
}
