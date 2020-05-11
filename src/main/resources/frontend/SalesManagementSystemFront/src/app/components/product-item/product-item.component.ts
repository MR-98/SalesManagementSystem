import {Component, OnInit} from '@angular/core';

import {ProductService} from "../../services/product.service";
import {FormBuilder, Validators} from "@angular/forms";
import {Product} from "../products/product";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  ngOnInit(): void {}

  submitted: boolean;
  product: Product;
  productForm;
  categoryForm;
  Categories: any = ['Groceries', 'Prepared food', 'Prescription drug', 'Non prescription drug', 'Clothing', 'Intangibles'];
  dictionary = new Map<string, string>();

  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder
  ) {{
    this.submitted = false;
    for(let i = 0; i < 6; i++)
      this.dictionary.set(this.Categories[i], (i+1).toString());
  }
      this.productForm = this.formBuilder.group({
      id: '',
      name: ['', Validators.required],
      basePrice: ['', Validators.required],
      preferredSalePrice: ['', Validators.required],

    });
    this.categoryForm = this.formBuilder.group({
      id: '1',
      name: this.Categories[0],
      quantityOfProducts: ''
    })
  }
  // convenience getter for easy access to form fields
  get f() { return this.productForm.controls; }

  onSubmit(){
    this.submitted = true;
    if(this.productForm.invalid)
      return;

    this.product = this.productForm.value;
    this.product.category = this.categoryForm.value;
    this.product.category.id = this.dictionary.get(this.categoryForm.value.name);
    this.productService.addProduct(this.product).subscribe();
    this.refresh();
  }

  refresh(){
    window.location.reload();
  }

}
