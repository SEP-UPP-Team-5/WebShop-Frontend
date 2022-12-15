import { Component, OnInit } from '@angular/core';
import { UserDto } from 'src/model/user-dto';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  public currentUser: any;
  constructor(readonly userService: UserService) { }

  ngOnInit(): void {
    this.getCurrentUser();
  }

  getCurrentUser() {
    const username = localStorage.getItem('username') || "";
    this.userService.getByUsername(username).subscribe(res => {
      this.currentUser = res;
    });
  }

}
