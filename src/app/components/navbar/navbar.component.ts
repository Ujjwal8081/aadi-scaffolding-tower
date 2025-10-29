import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  items = [
{ label: 'Home', icon: 'pi pi-fw pi-home' },
{ label: 'Products', icon: 'pi pi-fw pi-bars' },
{ label: 'About Us', icon: 'pi pi-fw pi-info' },
{ label: 'Contact', icon: 'pi pi-fw pi-phone' }
];
}
