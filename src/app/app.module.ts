import { PhotosService } from './photos/photos.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiroComponent } from "./componente/PrimeiroComponent";
import { GalleryComponent } from './gallery/gallery.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

import { PhotosComponent } from './photos/photos.component';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from './app.routes'; 
import { PhotoComponent } from './photos/photo/photo.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponent,
    GalleryComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
  
    PhotosComponent,
  
    PhotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
