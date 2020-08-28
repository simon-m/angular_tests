import { Component, OnInit } from '@angular/core';

import { PictureObject } from '../picture-object';
import { PictureLoaderService } from '../picture-loader.service';

@Component({
  selector: 'app-pic-grid',
  templateUrl: './pic-grid.component.html',
  styleUrls: ['./pic-grid.component.css']
})

export class PicGridComponent implements OnInit {

  constructor(private pictureLoaderService: PictureLoaderService) { }

  pictures: PictureObject[];

  getPictures() {
    this.pictureLoaderService.loadPictures()
    .subscribe(pictures => this.pictures = pictures);
  }

  ngOnInit(): void {
    this.getPictures();
  }
}

