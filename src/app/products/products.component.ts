import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ProductService } from '@app/core/product-service/product.service';
import { Product } from '@app/shared/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  productOverview: Partial<Product>[] = [];
  productDetail: { [id: string]: Product } = {};
  productLoading = false;
  activeProductId?: string;

  constructor(private productService: ProductService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.productLoading = true;
    this.productService.getOverview(3).subscribe((overview) => {
      this.productOverview = overview;
      this.productLoading = false;
    });
  }

  onSlideChange(slide: number) {
    const id = this.productOverview[slide].id!;
    this.activeProductId = id.toString();

    if (this.productDetail[id]) {
      return;
    }

    this.productLoading = true;
    this.activeProductId = undefined;
    this.cdr.detectChanges();

    this.productService.getDetails(id).subscribe(product => {
      this.productDetail[id.toString()] = product;
      this.productLoading = false;
      this.activeProductId = id.toString();

      this.cdr.detectChanges();
    });
  }
}
