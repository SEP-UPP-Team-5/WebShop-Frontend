import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  btnProducts: boolean = true;
  btnHome: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logOut() {
    this.router.navigateByUrl('');
    localStorage.setItem('token', '');
    localStorage.setItem('username', '');
  }

  goToProducts() {
    this.router.navigateByUrl('/home/products');
    this.btnProducts = false;
    this.btnHome = true;
  }

  goToHome() {
    this.router.navigateByUrl('/home');
    this.btnProducts = true;
    this.btnHome = false;
  }
}
