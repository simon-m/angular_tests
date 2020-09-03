import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReaderArticleComponent } from './reader-article.component';

describe('ReaderArticleComponent', () => {
  let component: ReaderArticleComponent;
  let fixture: ComponentFixture<ReaderArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReaderArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReaderArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
