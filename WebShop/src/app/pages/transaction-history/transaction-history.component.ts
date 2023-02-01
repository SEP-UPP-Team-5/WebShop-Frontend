import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { HistoryDto } from 'src/model/history-dto';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.scss']
})
export class TransactionHistoryComponent implements OnInit {

  displayedColumns: string[] = ['position', 'date', 'amount', 'products'];
  dataSource: any;
  accounts: any;
  history: HistoryDto[] = [];
  pipe = new DatePipe('en-US');

  constructor(private router: Router,
    private snackbar: MatSnackBar,
    private productService: ProductService,
    public dialog: MatDialog,) { }

  ngOnInit(): void {
   this.getTransactionHistory();
  }

  getTransactionHistory(): void {
    const id = localStorage.getItem('id');
    this.productService.getHistoryOrders(id).subscribe({
      next: (res: HistoryDto[]) => { 
        this.dataSource =  res;
        console.log(res, "history")
      },
      error: (err) => { console.log(err) }
    })
  }

}
