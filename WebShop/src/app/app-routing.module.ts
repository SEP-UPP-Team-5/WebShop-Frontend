import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ProductsComponent } from './components/products/products.component';
import { HomeComponent } from './pages/home/home.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { RegistrationPageComponent } from './pages/registration-page/registration-page.component';

const routes: Routes = [
  { path: "landing", component:  LandingPageComponent},
  { path: "registration", component: RegistrationPageComponent},
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: "home", component: HomeComponent,
    children: [
    {
      path: '',
      component: HomepageComponent
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
