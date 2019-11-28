import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ProductmanagementComponent } from './productmanagement/productmanagement.component';

import { AuthGuard } from './auth.guard';

const routes: Routes = [
    { path: '', redirectTo: '/restaurant', pathMatch:'full' },
    { path: 'login', component: LoginComponent },
    // { path: 'admin', component: AdminComponent,  canActivate: [AuthGuard] },
    // { path: 'home', component: HomeComponent },
    { path: 'restaurant', component: RestaurantComponent },
    { path: 'aboutus', component: AboutusComponent },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    // { path: 'productmanagement', component: ProductmanagementComponent, canActivate: [AuthGuard] }, 
    { path: 'inventory', component: InventoryComponent, canActivate: [AuthGuard]},
    { path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  LoginComponent,
  AdminComponent,
  HomeComponent,
  RestaurantComponent,
  AboutusComponent,
  DashboardComponent,
  ProductmanagementComponent,
  InventoryComponent,
  PagenotfoundComponent
]
