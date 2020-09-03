import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BlogArticle } from '../blog-article';
import { ArticleManagerService } from '../article-manager.service';

@Component({
  selector: 'app-reader-list',
  templateUrl: './reader-list.component.html',
  styleUrls: ['./reader-list.component.css']
})
export class ReaderListComponent implements OnInit {
  
  articles: BlogArticle[];
  
  constructor(private articleManagerService: ArticleManagerService,
              private router: Router) { }

  ngOnInit(): void {
    this.get_articles();
  }

  get_articles(): void {
    this.articleManagerService.getArticles()
      .subscribe(res => this.articles = res,
                 error => console.error(error));
  } 

  /* TODO: see how that would work
  openArticle(articleId): void {
    this.router.navigate(['/reader-article', {id: articleId}]);
  }
  */
  

}
