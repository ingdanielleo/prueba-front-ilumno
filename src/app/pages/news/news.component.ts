import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { News } from '../store/news.interface';

import { NewsService } from '../../providers/news.service';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  public noticeSelected: any;
  public listNews: News[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private newsService: NewsService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ id_news }) =>
      this.loadNotice(id_news)
    );
  }

  loadNotice(id: number) {
    this.noticeSelected = this.newsService.listNews[id];
  }
}
