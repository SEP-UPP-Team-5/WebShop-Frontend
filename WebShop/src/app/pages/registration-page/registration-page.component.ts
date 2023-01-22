import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent implements OnInit {

  name_test: String = "";
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToLogin() {
    this.router.navigateByUrl('');
  }

}
