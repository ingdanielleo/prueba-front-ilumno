import { createAction, props } from '@ngrx/store';
import { News } from './news.interface';
 
export const invokeNewsAPI = createAction(
  '[News API] Invoke News Fetch API'
);
 
export const newsFetchAPISuccess = createAction(
  '[News API] Fetch API Success',
  props<{ allNews: News[] }>()
);
