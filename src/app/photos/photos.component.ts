import { Component, OnInit } from '@angular/core';
import { Http, HttpModule } from '@angular/http';

import { Photo } from './photo/photo.modulo';
import { PhotosService } from './photos.service';



@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html'
})
export class PhotosComponent implements OnInit {

  //photo = "Photo1" //Conceito do interpolation
  photos : Photo[]

  constructor(private photosService: PhotosService) { }

  ngOnInit() {
    this.photosService.photos().subscribe(photos => this.photos = photos)
  }

}
