import { Component } from '@angular/core';
import { NewsApiService } from './news-api.service';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'newsapi';
    mArticles: Array<any>;
    mSources: Array<any>;

    constructor(private newsapi: NewsApiService) {
        console.log('app component constructor called');
    }

    // tslint:disable-next-line:use-life-cycle-interface
    ngOnInit() {
        this.newsapi.initArticles().subscribe(data => this.mArticles = data[('articles')]);
        this.newsapi.initSources().subscribe(data => this.mSources = data[('sources')]);
    }

    searchArticles(source) {
        console.log('selected source is: ' + source);
        this.newsapi.getArticlesByID(source).subscribe(data => this.mArticles = data[('articles')]);
    }
    searchArticlesPopular() {
        this.newsapi.getArticlesPopular().subscribe(data => this.mArticles = data[('articles')]);
    }

    searchArticlesDate() {
        this.newsapi.getArticlesDate().subscribe(data => this.mArticles = data[('articles')]);
    }

    searchArticlesByWord(inputWord) {
        console.log('selected word is: ' + inputWord);
        this.newsapi.getArticlesByWord(inputWord).subscribe(data => this.mArticles = data[('articles')]);
    }
}
