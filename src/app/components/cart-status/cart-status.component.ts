import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-status',
  templateUrl: './cart-status.component.html',
  styleUrls: ['./cart-status.component.scss']
})
export class CartStatusComponent implements OnInit {
  cartQuantity: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    // ✅ Subscribe to cart quantity observable
    this.cartService.cartQuantity$.subscribe((qty) => {
      this.cartQuantity = qty;
    });
  }
}
