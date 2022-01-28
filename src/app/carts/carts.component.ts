import { Component, OnInit } from '@angular/core';
import { CartsService } from '@app/core/carts-service/carts.service';
import { Cart } from '@app/shared/models/cart.model';
import { Product } from '@app/shared/models/product.model';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.scss']
})
export class CartsComponent implements OnInit {
  carts: Cart[] = [];
  loadedProducts: { [productId: number]: Product } = {};
  loadingCarts: boolean = false;

  constructor(private cartService: CartsService) { }

  ngOnInit(): void {
    this.loadingCarts = true;
    this.cartService.loadCarts().subscribe(carts => {
      this.carts = carts;
      this.loadingCarts = false;
    }, error => { this.loadingCarts = false; });
  }

  onIsOpenChange(cartIndex: number) {
    const productsRequired = this.carts[cartIndex]
      .products.map((product) => product.productId);
    
    const productsLacking = productsRequired.filter(id => !(id in this.loadedProducts));

    if (productsLacking.length > 0) {
      this.cartService.loadProducts(productsLacking).subscribe(newProducts => {
        this.loadedProducts = {...this.loadedProducts, ...newProducts };
      });
    }
  }

  products(cartIndex: number): (Product & { quantity: number })[] {
    return this.carts[cartIndex].products.map(
      (data) => {
        let loadedProduct = this.loadedProducts[data.productId];
        if (loadedProduct) {
          return {...loadedProduct, quantity: data.quantity };
        }
        
        return undefined;
      }
    )
  }
}
