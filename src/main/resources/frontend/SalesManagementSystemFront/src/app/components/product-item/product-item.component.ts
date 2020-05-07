import { Component, OnInit } from '@angular/core';

import {ProductService} from "../../services/product.service";
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {Product} from "../products/product";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  product: Product;
  productForm;
  categoryForm;

  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
      this.productForm = this.formBuilder.group({
      id: '',
      name: '',
      basePrice: '',
      preferredSalePrice: '',

    });
    this.categoryForm = this.formBuilder.group({
      id: '1',
      name: '',
      quantityOfProducts: ''
    })
  }

  ngOnInit(): void {
    //this.product = this.productService.getAll();
  }

  onSubmit(){
    this.product = this.productForm.value;
    this.product.category = this.categoryForm;
    this.productService.addProduct(this.product);
    this.goBack();
    console.warn(this.productForm.value);
    console.warn(this.categoryForm.value);
  }
  /*onSubmit(){
    this.productService.addProduct(this.product).subscribe(data => console.log(data));
    this.product = new Product();
    this.goBack();
  }*/

  goBack(){
    this.router.navigate(['/products']);
  }


}
