import { Component, OnInit, Input } from '@angular/core';

import {Analyst} from '../product.interface';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  @Input() analyst: Analyst;

  constructor() { }

  ngOnInit() {
  }

}
