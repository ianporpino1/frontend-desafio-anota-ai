import { Component } from '@angular/core';
import { CategoryFormComponent } from '../category-form/category-form.component';
import { ProductFormComponent } from '../product-form/product-form.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CategoryFormComponent, ProductFormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
