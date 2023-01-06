import { createFeatureSelector,createSelector  } from '@ngrx/store';
import { News } from './news.interface';
 
export const selectNews = createFeatureSelector<News[]>('mynews');
