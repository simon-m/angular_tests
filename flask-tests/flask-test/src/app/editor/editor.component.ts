import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BlogArticle } from '../blog-article';
import { ArticleManagerService } from '../article-manager.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
 
  @Input() article: BlogArticle;

  constructor(private articleManagerService: ArticleManagerService) { }

  ngOnInit(): void {
    this.article = new BlogArticle;
  }

  set textAreaValue (value: string) {
    this.article.text = value;
  }

  get textAreaValue () {
    return this.article.text;
  }

  submit() {
    this.articleManagerService.saveArticle(this.article);
  }

  preview() {}




}
