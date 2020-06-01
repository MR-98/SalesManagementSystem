import {Component, OnInit} from '@angular/core';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-database-capacity',
  templateUrl: './database-capacity.component.html',
  styleUrls: ['./database-capacity.component.scss']
})
export class DatabaseCapacityComponent implements OnInit {

  chart: any;
  canvas: any;
  ctx: any;

  // TODO: maybe in future get request to get ACTUAL size
  inUsage: number = 1;
  free: number = 9;

  data = {
    datasets: [{
      data: [this.free, this.inUsage],
      backgroundColor: [
        'rgba(255, 0, 0, 0.6)',
        'rgba(0, 255, 0, 0.6)'
      ]
    }],
    labels: [
      'In usage[GB]',
      'Free[GB]'
    ]
  };


  constructor() { }

  ngOnInit(): void {

    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');

    this.chart = new Chart(this.ctx, {
      type: 'pie',
      data: this.data,
      options: {
        legend: {
          display: true,
          position: 'bottom'
        },
        title: {
          display: true,
          text: 'Database usage',
          fontSize: 18
        },
        scales: {
          xAxes: [{
            display: false
          }],
          yAxes: [{
            display: false
          }],
        }
      }
    });
  }
}
