import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/Product';
import { MatTableModule } from '@angular/material/table';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [MatTableModule],
  providers: [ProductService],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {
  categoria = history.state.categoria;

  products: Product[] = [];
  columns = ["Id", "categoryId" , "title", "description", "price", "ownerId" ];


  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProductsByCategory(this.categoria.id).subscribe(products => {
      this.products = products;
    });
  }


}
