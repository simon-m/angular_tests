import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';

import { PictureObject } from './picture-object';
import { PICTURES } from './temp-image-data';


@Injectable({
  providedIn: 'root'
})

export class PictureLoaderService {

  constructor() { }

  loadPictures(): Observable<PictureObject[]> {
    return of(PICTURES);
  }
}

