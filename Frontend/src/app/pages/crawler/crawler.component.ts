import { Component } from '@angular/core';

import { OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-crawler',
  standalone: false,
  templateUrl: './crawler.component.html',
  styleUrl: './crawler.component.css'
})
export class CrawlerComponent implements OnInit {
  news: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:5000/api/crawler/news').subscribe({
      next: data => this.news = data,
      error: () => alert('爬蟲資料獲取失敗')
    });
  }

  fetchNews() {
    this.http.post('http://localhost:5000/api/crawler/fetch', {}).subscribe({
      next: () => this.ngOnInit(),  // 抓完再更新列表
      error: () => alert('爬蟲失敗')
    });
  }
}