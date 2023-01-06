import { createReducer, on } from '@ngrx/store';
import { News } from "../store/news.interface";
import { newsFetchAPISuccess } from './news.action';
 
export const initialState: ReadonlyArray<News> = [];
 
export const newsReducer = createReducer(
    initialState,
    on(newsFetchAPISuccess, (state, { allNews }) => {
        return allNews;
      })
);