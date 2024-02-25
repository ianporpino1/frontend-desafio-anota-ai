import { Product } from './../../../models/Product';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../../models/Category';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [MatTableModule, MatButtonModule],
  providers: [CategoryService],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.scss'
})
export class CategoryListComponent implements OnInit {
  categories: Category[] = [];
  products: Product[] = [];
  columns = ["Id", "title", "description", "ownerId", "details" ];

  constructor(private categoryService: CategoryService, private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }

  showProducts(categoria: Category) {
    this.router.navigate(['/categories', categoria.id, "products"], { state: { categoria } });
  }


  createCategory() {
    this.router.navigate(['/categories/create']);
  }

}
