import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-failed',
  templateUrl: './failed.component.html',
  styleUrls: ['./failed.component.scss']
})
export class FailedComponent {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToHome() {
    this.router.navigateByUrl('/home');
  }

  goToProducts() {
    this.router.navigateByUrl('/home/products');
  }
}
