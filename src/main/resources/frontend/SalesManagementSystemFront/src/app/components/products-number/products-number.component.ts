import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';
import {CategoryService} from "../../services/category.service";

@Component({
  selector: 'app-products-number',
  templateUrl: './products-number.component.html',
  styleUrls: ['./products-number.component.scss']
})
export class ProductsNumberComponent implements OnInit {

  chart: any;
  canvas: any;
  ctx: any;

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe(categories => {
      let categoriesNumber = []
      let categoriesLabels = []
      categories.forEach((category)=>{
        categoriesNumber.push(category.quantityOfProducts)
        categoriesLabels.push(category.name)
      })

      this.canvas = document.getElementById('productsNumberCanvas');
      this.ctx = this.canvas.getContext('2d');

      this.chart = new Chart(this.ctx, {
        type: 'bar',
        data: {
          labels: [''],
          datasets: [{
            data: [categoriesNumber[0]],
            backgroundColor: ['rgba(255, 0, 0, 0.6)'],
            label: categoriesLabels[0]
          },{
            data: [categoriesNumber[1]],
            backgroundColor: ['rgba(0, 255, 0, 0.6)'],
            label: categoriesLabels[1]
          },{
            data: [categoriesNumber[2]],
            backgroundColor: ['rgba(0, 0, 255, 0.6)'],
            label: categoriesLabels[2]
          },{
            data: [categoriesNumber[3]],
            backgroundColor: ['rgba(255, 255, 0, 0.6)'],
            label: categoriesLabels[3]
          },{
            data: [categoriesNumber[4]],
            backgroundColor: ['rgba(255, 0, 255, 0.6)'],
            label: categoriesLabels[4]
          },{
            data: [categoriesNumber[5]],
            backgroundColor: ['rgba(0, 255, 255, 0.6)'],
            label: categoriesLabels[5]
          }
          ]
        },
        options: {
          legend:{
            display:true,
            position:'bottom'
          },
          title: {
            display: true,
            text: 'Number of products',
            fontSize: 18
          },
          scales: {
            xAxes: [{
              ticks: {
                display: false //this will remove only the label
              }
            }],
            yAxes: [{
              ticks: {
                min: 0,
                stepSize: 1,
              }
            }]
          }
        }
      })
    })
  }

}
