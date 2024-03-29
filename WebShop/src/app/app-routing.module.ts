import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ProductsComponent } from './components/products/products.component';
import { HomeComponent } from './pages/home/home.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { PaymentPageComponent } from './pages/payment-page/payment-page.component';
import { RegistrationPageComponent } from './pages/registration-page/registration-page.component';
import { SuccessComponent } from './components/success/success.component';
import { TransactionHistoryComponent } from './pages/transaction-history/transaction-history.component';
import { FailedComponent } from './components/failed/failed.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  { path: "landing", component:  LandingPageComponent},
  { path: "registration", component: RegistrationPageComponent},
  { path: "confirmation/:id", component: SuccessComponent},
  { path: "failed/:id", component: FailedComponent},
  { path: "error/:id", component: ErrorComponent},
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: "home", component: HomeComponent,
    children: [
    {
      path: '',
      component: HomepageComponent
    },
    {
      path: 'history',
      component: TransactionHistoryComponent
    },
    {
      path: 'payment',
      component: PaymentPageComponent
    },
    {
      path: 'products',
      component: ProductsComponent
    } ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
