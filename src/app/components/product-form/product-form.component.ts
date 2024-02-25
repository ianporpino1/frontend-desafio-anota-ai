import { Component, inject, signal } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [ReactiveFormsModule, BtnPrimaryComponent],
  providers: [ProductService],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss'
})
export class ProductFormComponent {
  productForm!: FormGroup
    loading = signal(false)

    constructor(private productService:ProductService){
      this.productForm = new FormGroup({
        title: new FormControl('',[Validators.required]),
        description: new FormControl('',[Validators.required]),
        ownerId: new FormControl('',[Validators.required]),
        price: new FormControl('',[Validators.required]),
        categoryId: new FormControl('',[Validators.required])
      })
    }

    onSubmit(){
      this.loading.set(true)
      if(this.productForm.valid){
        const product = {
          ...this.productForm.value
        };

        this.productService.sendProduct(product).subscribe({
          next: () => {
            this.productForm.reset()
            this.loading.set(false)
          }
        })
      }
    }

}
