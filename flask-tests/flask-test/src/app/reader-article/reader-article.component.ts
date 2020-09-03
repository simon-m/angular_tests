import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BlogArticle } from '../blog-article';
import { ArticleManagerService } from '../article-manager.service';

@Component({
  selector: 'app-reader-article',
  templateUrl: './reader-article.component.html',
  styleUrls: ['./reader-article.component.css']
})
export class ReaderArticleComponent implements OnInit {

  article: BlogArticle;

  getArticle(): void {
    let articleId = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.articleManagerService.getArticle(articleId)
      .subscribe(res => this.article = res);
  }


  constructor(private articleManagerService: ArticleManagerService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getArticle();
  }

}
