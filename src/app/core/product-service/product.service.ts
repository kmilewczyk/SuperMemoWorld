import { HttpClient } from '@angular/common/http';
import { CoreEnvironment } from '@angular/compiler/src/compiler_facade_interface';
import { Injectable } from '@angular/core';
import { Product } from '@app/shared/models/product.model';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly baseUrl = environment.baseUrl + "products"

  constructor(private http: HttpClient) { }

  public getOverview(limit: number): Observable<Partial<Product>[]> {
    return this.http.get<Partial<Product>[]>(this.baseUrl + "?limit=" + limit);
  }

  public getDetails(id: number): Observable<Product> {
    return this.http.get<Partial<Product>>(this.baseUrl + "/" + id).pipe(
      map(getResponse => {
        if (getResponse && Object.keys(Product).every(key => key in getResponse)) {
          return {...getResponse} as Product;
        } 

        throw new Error("API Error");
      })
    );
  }
}
