import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class NewsApiService {

    API_KEY = 'c31584916417472b9e20cd37bbe4d139';

    constructor(private http: HttpClient) { }
    initSources() {
        return this.http.get('https://newsapi.org/v2/sources?language=en&apiKey=' + this.API_KEY);
    }
    initArticles() {
        return this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=' + this.API_KEY);
    }
    getArticlesByID(source: string) {
        return this.http.get('https://newsapi.org/v2/top-headlines?sources=' + source + '&apiKey=' + this.API_KEY);
    }
}
