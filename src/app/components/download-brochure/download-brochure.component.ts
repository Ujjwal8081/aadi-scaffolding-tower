import { Component, ViewChild } from '@angular/core';
import { ContactNowComponent } from '../contact-now/contact-now.component';

@Component({
  selector: 'app-download-brochure',
  templateUrl: './download-brochure.component.html',
  styleUrls: ['./download-brochure.component.css']
})
export class DownloadBrochureComponent {
    @ViewChild(ContactNowComponent) contactNowDialog!: ContactNowComponent;
  downloadBrochure() {
    // Logic to download the brochure
    const link = document.createElement('a');
    link.setAttribute('href', 'path-to-your-brochure.pdf');
    link.setAttribute('download', 'brochure.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
    openDialog() {
    this.contactNowDialog.openDialog();
  }
}
