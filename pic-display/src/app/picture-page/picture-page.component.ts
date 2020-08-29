import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PictureObject } from '../picture-object';
import { PictureLoaderService } from '../picture-loader.service';

@Component({
  selector: 'app-picture-page',
  templateUrl: './picture-page.component.html',
  styleUrls: ['./picture-page.component.css']
})
export class PicturePageComponent implements OnInit {

  @Input() picture: PictureObject;

  getPicture() {
    /* pictureId = this.route.snapshot.paramMap.get('id'); */
    const pictureId = +this.route.snapshot.paramMap.get('id');
    this.pictureLoaderService.loadPicture(pictureId)
      .subscribe(picture => this.picture = picture);
  }

  constructor(private route: ActivatedRoute,
              private pictureLoaderService: PictureLoaderService) { }

  ngOnInit(): void {
    this.getPicture();
  }

}
