import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { EMPTY, map, mergeMap, withLatestFrom } from 'rxjs';
import { NewsService } from '../../providers/news.service';
import { newsFetchAPISuccess, invokeNewsAPI } from './news.action';
import { selectNews } from './news.selector';

@Injectable()
export class NewsEffect {
  constructor(
    private actions$: Actions,
    private newsService: NewsService,
    private store: Store
  ) {}

  loadAllNews$ = createEffect(() =>
    this.actions$.pipe(
      ofType(invokeNewsAPI),
      withLatestFrom(this.store.pipe(select(selectNews))),
      mergeMap(([, newsformStore]) => {
        if (newsformStore.length > 0) {
          return EMPTY;
        }
        return this.newsService
          .getNews()
          .pipe(map((data) => newsFetchAPISuccess({ allNews: data })));
      })
    )
  );
}
