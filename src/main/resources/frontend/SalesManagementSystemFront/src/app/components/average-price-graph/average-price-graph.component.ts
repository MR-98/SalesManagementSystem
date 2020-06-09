import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';
import {CategoryService} from "../../services/category.service";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-average-price-graph',
  templateUrl: './average-price-graph.component.html',
  styleUrls: ['./average-price-graph.component.scss']
})
export class AveragePriceGraphComponent implements OnInit {

  chart: any;
  canvas: any;
  ctx: any;

  constructor(private categoryService: CategoryService, private productService: ProductService) {
    let categoriesLabels = [];
    let categoriesNames = [];
    let id: number;
    let sum: number;
    this.categoryService.getAll().subscribe(categories => {
      let categoriesAveragePrice = [];
      categories.forEach((category) => {
        categoriesLabels.push(category.id);
        categoriesNames.push(category.name);
      });
      for (let i in categoriesLabels) {
        id = +categoriesLabels;
        this.productService.getAllInCategory(5).subscribe(products => {
          sum = 0;
          products.forEach((product) => {
            sum += product.basePrice;
          });
          categoriesAveragePrice.push(sum); //tu dodaje dobrze
          console.log("dla 0: " + categoriesAveragePrice[0]);
          //console.log("dla 1: " + categoriesAveragePrice[1]);
        });

      }
      console.log("dla 0: " + categoriesAveragePrice[0]);
      //tu juz categoriesAveragePrice jest undefined


      this.canvas = document.getElementById('priceCanvas');
      this.ctx = this.canvas.getContext('2d');

      this.chart = new Chart(this.ctx, {
        type: 'bar',
        data: {
          labels: [''],
          datasets: [{
            data: [categoriesAveragePrice[0]],
            backgroundColor: ['rgba(255, 0, 0, 0.6)'],
            label: categoriesNames[0]
          },{
            data: [categoriesAveragePrice[1]],
            backgroundColor: ['rgba(0, 255, 0, 0.6)'],
            label: categoriesNames[1]
          },{
            data: [categoriesAveragePrice[2]],
            backgroundColor: ['rgba(0, 0, 255, 0.6)'],
            label: categoriesNames[2]
          },{
            data: [categoriesAveragePrice[3]],
            backgroundColor: ['rgba(255, 255, 0, 0.6)'],
            label: categoriesNames[3]
          },{
            data: [categoriesAveragePrice[4]],
            backgroundColor: ['rgba(255, 0, 255, 0.6)'],
            label: categoriesNames[4]
          },{
            data: [categoriesAveragePrice[5]],
            backgroundColor: ['rgba(0, 255, 255, 0.6)'],
            label: categoriesNames[5]
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
            text: 'Average price in category',
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
                stepSize: 10,
              }
            }]
          }
        }
      })
    });
  }


  ngOnInit(): void {

  }
}
