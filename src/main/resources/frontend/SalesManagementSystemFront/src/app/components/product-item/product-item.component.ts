import {Component, OnInit} from '@angular/core';

import {ProductService} from "../../services/product.service";
import {FormBuilder} from "@angular/forms";
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
    private formBuilder: FormBuilder
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
  }

  onSubmit(){
    this.product = this.productForm.value;
    this.product.category = this.categoryForm.value;
    this.productService.addProduct(this.product).subscribe();
    this.refresh();
  }

  refresh(){
    window.location.reload();
  }


}
