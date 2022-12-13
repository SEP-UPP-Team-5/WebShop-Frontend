import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginDto } from 'src/model/login-dto';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  loggedUser: LoginDto = new LoginDto();

  constructor(private router: Router,
              private userSevice: UserService) { }

  ngOnInit(): void {
  }

  login(): void {
    // this.userSevice.login(this.loggedUser).subscribe((res: any) => {
    //   localStorage.setItem ('token', res.token);
    //   this.router.navigateByUrl('/home');
    // })
    this.router.navigateByUrl('/home');
  }


}
