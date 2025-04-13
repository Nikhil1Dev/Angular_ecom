import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartQuantity = new BehaviorSubject<number>(0); // holds cart quantity
  cartQuantity$ = this.cartQuantity.asObservable();     // observable for components to subscribe

  constructor() {}

  // ✅ Method to update quantity (called from CartComponent)
  updateQuantity(quantity: number): void {
    this.cartQuantity.next(quantity);
  }

  // Optional getter
  getQuantity(): number {
    return this.cartQuantity.value;
  }
}
