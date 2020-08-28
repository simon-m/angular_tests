import { Component, OnInit } from '@angular/core';

import { PictureObject } from '../picture-object';
import { PictureLoaderService } from '../picture-loader.service';

@Component({
  selector: 'app-pic-list',
  templateUrl: './pic-list.component.html',
  styleUrls: ['./pic-list.component.css']
})
export class PicListComponent implements OnInit {

  constructor(private pictureLoaderService: PictureLoaderService) { }

  pictures: PictureObject[];
  picWidth: number;

  getPictures() {
    this.pictureLoaderService.loadPictures()
      .subscribe(pictures => this.pictures = pictures);
  }

  bigger() {
    if (this.picWidth <= 400)
      this.picWidth += 20;
  }

  smaller() {
    if (this.picWidth >= 120)
      this.picWidth -= 20;
  }

  ngOnInit(): void {
    this.getPictures();
    this.picWidth = 250;
  }

}
