import {Component, Input, OnInit} from '@angular/core';
import {Category} from "../categories/category";

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.scss']
})
export class CategoryItemComponent implements OnInit {
  @Input() categoryItem: Category;

  constructor() { }

  ngOnInit(): void {
  }

}
