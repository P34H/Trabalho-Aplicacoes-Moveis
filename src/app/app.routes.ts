
import { Component } from '@angular/core';
import { Routes } from '@angular/router';

import { PhotosComponent } from './photos/photos.component';
import { HomeComponent } from './home/home.component';

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'photos', component: PhotosComponent }
]