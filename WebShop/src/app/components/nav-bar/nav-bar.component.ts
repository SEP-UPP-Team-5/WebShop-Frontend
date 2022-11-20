import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  reg: boolean = false;
  log: boolean = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToRegistration() {
    this.reg = true;
    this.log = false;
    this.router.navigateByUrl('/registration');
  }

  goToLogin() {
    this.reg = false;
    this.log = true;
    this.router.navigateByUrl('/landing');
  }
}
