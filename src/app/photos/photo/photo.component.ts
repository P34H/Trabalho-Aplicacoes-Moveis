import { Photo } from './photo.modulo';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-photo',//selector de photo 
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  @Input() photo : Photo
  
  
  constructor() { }

  ngOnInit() {
  }

}
