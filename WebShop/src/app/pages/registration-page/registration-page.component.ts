import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDto } from 'src/model/user-dto';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent implements OnInit {

  name_test: String = "";
  user: UserDto = new UserDto();
  
  constructor(private router: Router,
    private userSevice: UserService) { }

    roles: any =  [
      {
        name: 'Admin',
        value: 'admin'
      },
      {
        name: 'Customer',
        value: 'customer'
      }
    ]

  ngOnInit(): void {
  }

  goToLogin() {
    this.router.navigateByUrl('');
  }

  register(): void {
    this.user.role = "admin";
    this.user.gender = "female"
    this.userSevice.register(this.user).subscribe((res: any) => {
      console.log(res);
    })
    this.router.navigateByUrl('');
  }

}
