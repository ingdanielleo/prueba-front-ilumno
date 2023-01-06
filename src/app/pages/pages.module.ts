import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//NGRX
import { StoreModule } from '@ngrx/store';
import { newsReducer } from './store/news.reducer';
import { EffectsModule } from '@ngrx/effects';
import { NewsEffect } from './store/news.effect';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('mynews', newsReducer),
    EffectsModule.forFeature([NewsEffect])
  ]
})
export class PagesModule { }
