import { Component, ViewChild } from '@angular/core';
import { ContactNowComponent } from '../contact-now/contact-now.component';

@Component({
  selector: 'app-our-vision',
  templateUrl: './our-vision.component.html',
  styleUrls: ['./our-vision.component.css']
})
export class OurVisionComponent {
  @ViewChild(ContactNowComponent) contactNowDialog!: ContactNowComponent;

  openDialog() {
    this.contactNowDialog.openDialog();
  }
}
