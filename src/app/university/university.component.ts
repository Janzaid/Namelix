import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../services/uni-service.service';

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.scss'],
})
export class UniversityComponent implements OnInit {
  users: any;

  constructor(private UserData: UserDataService) {}

  ngOnInit(): void {}

  getUsers(searchText: any) {
    this.UserData.users(searchText).subscribe((data) => {
      console.warn('data', data);
      this.users = data;
    });
  }
}
