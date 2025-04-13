// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { UserStorageService } from './services/storage/user-storage.service';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss'],
// })
// export class AppComponent {
//   title = 'ECommerceWeb';

//   isCustomerLoggedIn: boolean = UserStorageService.isCustomerLoggedIn();
//   isAdminLoggedIn: boolean = UserStorageService.isAdminLoggedIn();

//   constructor(private router: Router) {}

//   ngOnInit(): void {
//     this.router.events.subscribe((event) => {
//       this.isCustomerLoggedIn = UserStorageService.isCustomerLoggedIn();
//       this.isAdminLoggedIn = UserStorageService.isAdminLoggedIn();
//     });
//   }
//   logout() {
//     UserStorageService.signOut();
//     this.router.navigateByUrl('login');
//   }
// }
// your code goes here
// 

import { Component, Inject, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { UserStorageService } from './services/storage/user-storage.service';
import { CartService } from './services/cart.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ECommerceWeb';
  isCustomerLoggedIn: boolean = UserStorageService.isCustomerLoggedIn();
  isAdminLoggedIn: boolean = UserStorageService.isAdminLoggedIn();
  showHeroSection: boolean = false;

  constructor(
    private router: Router,
    private cartService: CartService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showHeroSection = event.url === '/';
        this.isCustomerLoggedIn = UserStorageService.isCustomerLoggedIn();
        this.isAdminLoggedIn = UserStorageService.isAdminLoggedIn();
      }
    });
  }

  logout() {
    UserStorageService.signOut();
    this.router.navigateByUrl('login');
  }

  scrollToSection(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // ✅ Learn More Popup
  openLearnMoreDialog(): void {
    this.dialog.open(DialogBoxComponent, {
      data: {
        title: '🛍 About ShopZilla',
        content: `
          <p>Welcome to ShopZilla – your one-stop destination for everything you need!</p>
          <ul>
            <li>🚚 <strong>Nationwide Shipping</strong> – Fast, reliable delivery to over 20+ states</li>
            <li>🔐 <strong>Secure Checkout</strong> – Your transactions are safe with us</li>
            <li>🌍 <strong>Outstanding Support</strong> – 24/7 help, wherever you are</li>
            <li>⭐ <strong>Genuine Reviews</strong> – Trusted by thousands of happy customers</li>
          </ul>
          <p>Explore our products, enjoy exclusive deals, and experience shopping made simple.<br>We’re here to make online shopping smarter, safer, and more fun!</p>
        `
      }
    });
  }

  // ✅ Help Popup
  openHelpDialog(): void {
    this.dialog.open(DialogBoxComponent, {
      data: {
        title: '🛠️ We\'re Here to Help – 24x7 Support',
        content: `
          <p>Have questions, feedback, or need assistance?</p>
          <p>Reach out to us anytime at:<br>👉 <a href="mailto:support@shopzilla.com">support@shopzilla.com</a></p>
          <p>We’ll get back to you as soon as possible!</p>
        `
      }
    });
  }
}

// ✅ Inline Dialog Component
@Component({
  selector: 'app-dialog-box',
  template: `
    <h2 mat-dialog-title>{{ data.title }}</h2>
    <mat-dialog-content [innerHTML]="data.content"></mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Close</button>
    </mat-dialog-actions>
  `
})
export class DialogBoxComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { title: string; content: string }) {}
}