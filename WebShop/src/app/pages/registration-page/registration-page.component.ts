import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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
    private snackbar: MatSnackBar,
    private userSevice: UserService) { }

  ngOnInit(): void {
  }

  goToLogin() {
    this.router.navigateByUrl('');
  }

  register(): void {
    this.userSevice.register(this.user).subscribe({next: (res: any) => { 
      console.log(res)
      this.router.navigateByUrl('');
    },
    error: (err: HttpErrorResponse) => { 
      this.snackbar.open('Please check the fields and try again', 'OK');
     }
    })
  }

}
