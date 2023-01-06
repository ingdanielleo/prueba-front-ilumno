import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { invokeNewsAPI } from '../store/news.action';
import { selectNews } from '../store/news.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private store: Store) { }
  news$ = this.store.pipe(select(selectNews));


  ngOnInit(): void {
    this.store.dispatch(invokeNewsAPI());
    
  }

}
