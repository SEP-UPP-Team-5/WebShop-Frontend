import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegistrationPageComponent } from './pages/registration-page/registration-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';

import { ProductsComponent } from './components/products/products.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { PaymentPageComponent } from './pages/payment-page/payment-page.component';
import { SuccessComponent } from './components/success/success.component';
import {MatDialogModule} from '@angular/material/dialog';
import { CartComponent } from './components/cart/cart.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TransactionHistoryComponent } from './pages/transaction-history/transaction-history.component';
import { ErrorComponent } from './components/error/error.component';
import { FailedComponent } from './components/failed/failed.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavBarComponent,
    FooterComponent,
    RegistrationPageComponent,
    HomeComponent,
    ProductsComponent,
    HomepageComponent,
    PaymentPageComponent,
    SuccessComponent,
    CartComponent,
    TransactionHistoryComponent,
    ErrorComponent,
    FailedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    MatCardModule,
    MatIconModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
