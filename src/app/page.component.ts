import { Component } from '@angular/core';
import { PageEvent } from '@angular/material';
import { NewsApiService } from './news-api.service';

@Component({
    selector: 'app-page',
    templateUrl: './page.component.html',
    styleUrls: ['./app.component.css']
})
export class PageComponent {
    length: number;
    constructor(private newsapi: NewsApiService) {
        console.log('app component constructor called');
        newsapi.initArticles().subscribe(data => this.length = data[('totalResults')]);
         console.log('length'+length);
    }
    // MatPaginator Inputs

    pageSize = 5;
    pageSizeOptions: number[] = [5, 10, 25, 100];

    // MatPaginator Output
    pageEvent: PageEvent;

    setPageSizeOptions(setPageSizeOptionsInput: string) {
        this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
}
