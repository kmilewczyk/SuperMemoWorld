import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CartGetResult } from '@app/shared/models/cart-get-result.model';
import { Cart } from '@app/shared/models/cart.model';
import { ProductGetResult } from '@app/shared/models/product-get-result.model';
import { Product } from '@app/shared/models/product.model';
import { UserGetResult } from '@app/shared/models/user-get-result.model';
import { User } from '@app/shared/models/user.model';
import { forkJoin, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartsService {
  private readonly baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  public loadCarts(): Observable<Cart[]> {
    return forkJoin({
      cartsResult: this.http.get<CartGetResult[]>(this.baseUrl + 'carts'),
      usersResult: this.http.get<UserGetResult[]>(this.baseUrl + 'users'),
    }).pipe(
      map((({cartsResult, usersResult}) => {
        let carts = [...cartsResult] as Partial<Cart>[];
        for (let cart of carts) {
          let userResult = usersResult[cart.userId];
          if (userResult) {
            let user = User.fromUserGetResult(userResult);
            cart.user = user;
          }
        }
        return carts as Cart[];
      })),
    );
  }

  public loadProducts(productIds: number[]): Observable<{ [productId: number]: Product}> {
    let forkMap = Object.fromEntries(
      productIds.map((productId) => [
        productId,
        this.http.get<ProductGetResult>(this.baseUrl + 'products/' + productId),
      ])
    );

    return forkJoin(forkMap).pipe(
      map((dict) => {
        return dict;
      })
    );
  }
}
