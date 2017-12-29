import { Component, OnInit } from '@angular/core';

import { ProductSource } from '../product.interface';
import { ElasticsearchService } from '../../elasticsearch.service';

@Component({
  selector: 'search-products',
  templateUrl: './search-products.component.html',
  styleUrls: ['./search-products.component.css']
})
export class SearchProductsComponent implements OnInit {

  private static readonly INDEX = 'analyst';
  private static readonly TYPE = 'analyst';

  productSources: ProductSource[];
  private queryText = '';

  private lastKeypress = 0;

  constructor(private es: ElasticsearchService) {
    this.queryText = '';
  }

  ngOnInit() {

  }

  search($event) {
    if ($event.timeStamp - this.lastKeypress > 100) {
      this.queryText = $event.target.value;

      this.es.fullTextSearch(
        SearchProductsComponent.INDEX,
        SearchProductsComponent.TYPE,
        'fileName', this.queryText).then(
        response => {
          this.productSources = response.hits.hits;
          console.log(response);
        }, error => {
          console.error(error);
        }).then(() => {
          console.log('Search Completed!');
        });
    }

    this.lastKeypress = $event.timeStamp;
  }
}
