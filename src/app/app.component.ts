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
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { UserStorageService } from './services/storage/user-storage.service';
import { CartService } from './services/cart.service'; // ✅ Import cart service

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ECommerceWeb';
  isCustomerLoggedIn: boolean = UserStorageService.isCustomerLoggedIn();
  isAdminLoggedIn: boolean = UserStorageService.isAdminLoggedIn();
  showHeroSection: boolean = false;

  constructor(
    private router: Router,
    private cartService: CartService // ✅ Inject it
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
}
