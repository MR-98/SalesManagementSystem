import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Product} from "../products/product";
import {ProductService} from "../../services/product.service";
import {SaleTaxService} from "../../services/sale-tax.service";

interface State {
  value: string;
}

@Component({
  selector: 'app-tax-calculator',
  templateUrl: './tax-calculator.component.html',
  styleUrls: ['./tax-calculator.component.scss']
})
export class TaxCalculatorComponent implements OnInit {

  states: State[] = [
    {value: 'Alabama'},
    {value: 'Alaska'},
    {value: 'Arizona'},
    {value: 'Arkansas'},
    {value: 'California'},
    {value: 'Colorado'},
    {value: 'Connecticut'},
    {value: 'Delaware'},
    {value: 'District of Columbia'},
    {value: 'Florida'},
    {value: 'Georgia'},
    {value: 'Guam'},
    {value: 'Hawaii'},
    {value: 'Idaho'},
    {value: 'Illinois'},
    {value: 'Indiana'},
    {value: 'Iowa'},
    {value: 'Kansas'},
    {value: 'Kentucky'},
    {value: 'Louisiana'},
    {value: 'Maine'},
    {value: 'Maryland'},
    {value: 'Massachusetts'},
    {value: 'Michigan'},
    {value: 'Minnesota'},
    {value: 'Mississippi'},
    {value: 'Missouri'},
    {value: 'Montana'},
    {value: 'Nebraska'},
    {value: 'Nevada'},
    {value: 'New Hampshire'},
    {value: 'New Jersey'},
    {value: 'New Mexico'},
    {value: 'New York'},
    {value: 'North Carolina'},
    {value: 'North Dakota'},
    {value: 'Ohio'},
    {value: 'Oklahoma'},
    {value: 'Oregon'},
    {value: 'Pennsylvania'},
    {value: 'Puerto Rico'},
    {value: 'Rhode Island'},
    {value: 'South Carolina'},
    {value: 'Tennessee'},
    {value: 'Texas'},
    {value: 'Utah'},
    {value: 'Vermont'},
    {value: 'Virginia'},
    {value: 'Washington'},
    {value: 'West Virginia'},
    {value: 'Wisconsin'},
    {value: 'Wyoming'}
  ];

  products: Product[];
  tax: number = 0;
  selectedProduct: Product;
  calculatorForm;

  logisticalCost: number;
  marginValue: number;
  netPrice: number;

  logisticalCheckbox = true;
  marginCheckbox = false;
  netPriceCheckbox = false;

  constructor(private formBuilder: FormBuilder, private productService: ProductService, private saleTaxService: SaleTaxService) {
    let temp: string = localStorage.getItem("selectedState");
    if (temp == undefined) {
      temp = 'Alabama';
    }

    this.calculatorForm = this.formBuilder.group({
      state: [this.states.find(state => state.value === temp), [Validators.required]],
      product: [null, [Validators.required]]
    })
  }

  ngOnInit(): void {
    this.productService.getAll().subscribe(products => {
      this.products = products;
    });
  }

  get product() {
    return this.calculatorForm.get('product')
  }

  onSelectionChange() {
    let state: State = this.calculatorForm.get('state').value;
    let product: Product = this.calculatorForm.get('product').value;

    this.saleTaxService.getTaxByStateAndCategoryName(state.value, product.category.name).subscribe(tax => {
      this.tax = tax;
      console.log(this.tax);
      this.selectedProduct = product;
      this.initCalculatorInputs();
    });
  }

  initCalculatorInputs() {
    this.logisticalCost = 0;

    this.netPrice = Math.round((this.selectedProduct.preferredSalePrice / (1 + this.tax)) * 100) / 100;
    console.log(this.netPrice);

    this.marginValue = Math.round((this.netPrice - this.selectedProduct.basePrice - this.logisticalCost) * 100) / 100;
    console.log(this.marginValue);
  }

  calculate() {
    if(this.marginCheckbox) {
      this.calculateMarginValue();
    } else if(this.logisticalCheckbox) {
      this.calculateLogisticalCost();
    } else if(this.netPriceCheckbox) {
      this.calculateNetPrice();
    }
  }

  calculateLogisticalCost() {
    this.logisticalCost = Math.round((this.netPrice - this.selectedProduct.basePrice - this.marginValue) * 100) / 100;
  }

  calculateMarginValue() {
    this.marginValue = Math.round((this.netPrice - this.selectedProduct.basePrice - this.logisticalCost) * 100) / 100;
  }

  calculateNetPrice() {
    this.netPrice = Math.round((this.marginValue + this.selectedProduct.basePrice + this.logisticalCost) * 100) / 100;
  }
}
