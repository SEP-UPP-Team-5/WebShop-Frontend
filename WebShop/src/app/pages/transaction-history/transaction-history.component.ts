import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.scss']
})
export class TransactionHistoryComponent implements OnInit {

  displayedColumns: string[] = ['position', 'date', 'amount', 'products'];
  dataSource: any;
  public accounts: any;

  constructor(private router: Router,
    private snackbar: MatSnackBar,
    public dialog: MatDialog,) { }

  ngOnInit(): void {
   
  }

}
