import { Component, inject, signal } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../../models/Category';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-form',
  standalone: true,
  imports: [ReactiveFormsModule, BtnPrimaryComponent],
  providers: [CategoryService],
  templateUrl: './category-form.component.html',
  styleUrl: './category-form.component.scss'

})
export class CategoryFormComponent {
    categoryForm!: FormGroup
    loading = signal(false)

    constructor(private categoryService:CategoryService, private router: Router){
      this.categoryForm = new FormGroup({
        title: new FormControl('',[Validators.required]),
        description: new FormControl('',[Validators.required]),
        ownerId: new FormControl('',[Validators.required])
      })
    }

    onSubmit(){
      this.loading.set(true)
      if(this.categoryForm.valid){
        const category = {
          ...this.categoryForm.value
        };

        this.categoryService.sendCategory(category).subscribe({
          next: () => {
            this.categoryForm.reset()
            this.loading.set(false)
            this.router.navigate(["categories"])
          }
        })
      }
    }


}
