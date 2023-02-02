import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit {

  public id: any;
  public order: any;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private service: ProductService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap?.get('id')
    this.getOrder();
  }

  goToHome() {
    this.router.navigateByUrl('/home');
  }

  goToHistory() {
    this.router.navigateByUrl('/home/history');
  }

  getOrder() {
    this.service.getOrderById(this.id).subscribe((res:any) => {
      this.order = res;
    });
  }

}
