import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  constructor(private http: HttpClient) {}
  users(batman: any) {
    return this.http.get(
      'https://fake-movie-database-api.herokuapp.com/api?s=batman' + batman
    );
  }
}
