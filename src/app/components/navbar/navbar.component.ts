import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  private aboutToggle!: HTMLElement;
  private submenu!: HTMLElement;
  iconChange: boolean = false;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.aboutToggle = this.el.nativeElement.querySelector('#aboutToggle');
    this.submenu = this.el.nativeElement.querySelector('#submenu');
    this.aboutToggle.addEventListener('click', (e: MouseEvent) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        this.submenu.classList.toggle('active');
      }
    });
  }

  toggleIcon(){
    this.iconChange = !this.iconChange
  }
}