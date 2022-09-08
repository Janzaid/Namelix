import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  constructor(private http: HttpClient) {}
  users(rec: any) {
    return this.http.get(
      'https://hub.dummyapis.com/singlelist?text=Test&noofRecords=' + rec
    );
  }
}
