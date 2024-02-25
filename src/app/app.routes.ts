import { Routes } from '@angular/router';
import { CategoryFormComponent } from './components/category-form/category-form.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { ProductListComponent } from './components/product-list/product-list.component';

export const routes: Routes = [
  {
    path: "categories",
    component: CategoryListComponent,
  },
  {
    path: "products",
    component: ProductFormComponent
  },
  {
    path: 'categories/:idCategoria/products',
    component: ProductListComponent

  },
  {
    path: 'categories/create',
    component: CategoryFormComponent
  }
];
