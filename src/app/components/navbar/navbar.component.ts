import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  private menuToggle!: HTMLElement;
  private navMenu!: HTMLElement;
  private aboutToggle!: HTMLElement;
  private submenu!: HTMLElement;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.menuToggle = this.el.nativeElement.querySelector('#menuToggle');
    this.navMenu = this.el.nativeElement.querySelector('#navMenu');
    this.aboutToggle = this.el.nativeElement.querySelector('#aboutToggle');
    this.submenu = this.el.nativeElement.querySelector('#submenu');

    // Toggle main menu
    this.menuToggle.addEventListener('click', () => {
      this.navMenu.classList.toggle('active');
    });

    // Toggle "About" submenu (for small screens)
    this.aboutToggle.addEventListener('click', (e: MouseEvent) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        this.submenu.classList.toggle('active');
      }
    });
  }

  // Handle window resize
  @HostListener('window:resize')
  onResize(): void {
    if (window.innerWidth > 768) {
      this.navMenu?.classList.remove('active');
      this.submenu?.classList.remove('active');
    }
  }

  // Close menu when clicking outside
  @HostListener('document:click', ['$event'])
  onDocumentClick(e: MouseEvent): void {
    const target = e.target as HTMLElement;
    if (!target.closest('nav')) {
      this.navMenu?.classList.remove('active');
    }
  }
}