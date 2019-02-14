import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class NewsApiService {

    API_KEY = '359791c55bdd46d99a7c3617684c3dc0';
    API_URL = 'https://newsapi.org/v2/';
    API_ARTICLE = 'top-headlines?sources?country=us&category=technology';

    constructor(private http: HttpClient) { }
    initSources() {
        return this.http.get(this.API_URL + 'sources?country=us&category=technology&apiKey=' + this.API_KEY);
    }
    initArticles() {
        return this.http.get(this.API_URL + this.API_ARTICLE + '&apiKey=' + this.API_KEY);
    }
    getArticlesPopular() {
        return this.http.get(this.API_URL + this.API_ARTICLE + '&sortBy=popularity&apiKey=' + this.API_KEY);
    }
    getArticlesDate() {
        return this.http.get(this.API_URL + this.API_ARTICLE + '&sortBy=date&apiKey=' + this.API_KEY);
    }
    getArticlesByID(source: string) {
        return this.http.get(this.API_URL + 'top-headlines?sources=' + source + '&apiKey=' + this.API_KEY);
    }

    getArticlesByWord(inputWord: string) {
        return this.http.get(this.API_URL + 'top-headlines?q=' + inputWord + '&sortBy=popularity&apiKey=' + this.API_KEY);
    }
}
