import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { environment } from '../../environments/environment';
import { map } from 'rxjs';
import { News } from '../pages/store/news.interface';
import { formRegister } from '../interfaces/form.interface';

const base_url = environment.base_url;
@Injectable({
  providedIn: 'root',
})
export class NewsService {
  public listNews: News[] = [];
  constructor(private http: HttpClient, private router: Router) {}

  getNews() {
    return this.http.get<News[]>(`${base_url}apiservices-getnews`).pipe(
      map((resp: any) => {
        this.listNews = resp.news;
        return resp.news;
      })
    );
  }

  getPrograms() {
    return this.http.get<News[]>(`${base_url}apiservices-getprograms`).pipe(
      map((res: any) => {
        return this.removeDuplicates(res.programs, 'title');
      })
    );
  }

  saveForm(formRegister: formRegister) {
    return this.http.post<formRegister>(
      `${base_url}apiservices-postform`,
      formRegister
    );
  }

  removeDuplicates(originalArray: any, prop: any) {
    var newArray: any = [];
    var lookupObject: any = {};

    for (var i in originalArray) {
      lookupObject[originalArray[i][prop]] = originalArray[i];
    }

    for (i in lookupObject) {
      newArray.push(lookupObject[i]);
    }
    return newArray;
  }
}
