import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  // user: any = null;
  // name= '';
  
  // ngOnInit() {
  //   if (this.isLoggedIn()) {
  //     const token = localStorage.getItem('token');
  //     const headers = new HttpHeaders({Authorization: `Bearer ${token}`});
  //     // 取得使用者資料
  //     this.http.get<any>('http://localhost:5000/api/me', { headers }).subscribe({
  //       next: (data) => this.user = data,
  //       error: (err) => {
  //         if (err.status === 401) {
  //           // Token 無效才登出
  //           this.logout();
  //         } else {
  //           // 其他錯誤：只記錄錯誤，不登出
  //           console.error('取得使用者資料失敗：', err);
  //         }
  //       }
  //     });
  //   }
  // }
  
  // message = '';

  // constructor(private http: HttpClient) {}
  // mode = 'login';  // 預設為登入
  
  isLoggedIn() {
    const token = localStorage.getItem('token');
    return !!localStorage.getItem('token');
  }

  // getUsername() {
  //   return localStorage.getItem('username');
  // }

  // sendName() {
  //   const payload = { name: this.name };
  //   this.http.post<any>('http://localhost:5000/api/greet', payload)
  //     .subscribe(res => this.message = res.message);
  // }
  
  logout() {
    localStorage.removeItem('token');
    location.reload();  // 或導向登入頁
  }
}