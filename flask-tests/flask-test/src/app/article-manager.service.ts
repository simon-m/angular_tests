import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, noop } from 'rxjs';

import { BlogArticle } from './blog-article';

/* TODO: getArticle() and getArticles() */

@Injectable({
  providedIn: 'root'
})
export class ArticleManagerService {

  constructor(private http: HttpClient) { }

  /* getArticles(): Observable<BlogArticle[]> {}

  getArticle(articleId: number): Observable<BlogArticle> {} */

  saveArticle(article: BlogArticle): void {
    this.http.post<any>('http://127.0.0.1:5000/api/save_article', 
                        JSON.stringify(article),
                        {responseType:'json'})
      .subscribe(res => noop(), 
                 error => console.error(error));
  }

}
