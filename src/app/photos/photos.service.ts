import { Injectable } from '@angular/core'
import { Http, HttpModule } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';


import { Photo } from './photo/photo.modulo';
import { APP_API } from '../app.api';

@Injectable()//vai injetar no construtor injecao de dependecia
export class PhotosService{
    

    constructor(private http: Http){}//contrutor que vai vim do modulo http

    photos(): Observable<Photo[]>{//faz uma solicitaçao ou conteudo quando tiver disponivel
        return this.http.get(`${APP_API}/photos`)
        .map(response => response.json())//para trazer apenas conteudo json
    }
}