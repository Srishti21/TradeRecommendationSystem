import { Routes } from '@angular/router';

import { LoginComponent } from '../login/login.component';
import { LogoutComponent } from '../logout/logout.component';
import { HomeComponent } from '../home/home.component';
import { RouteGuardService } from '../service/route-guard.service';
import { SavedStocksComponent } from '../saved-stocks/saved-stocks.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'home/:username', component: HomeComponent, canActivate: [RouteGuardService]},
    {path: 'login', component: LoginComponent},
    {path: 'savedStocks', component: SavedStocksComponent, canActivate: [RouteGuardService]},
    {path: 'logout', component: LogoutComponent, canActivate: [RouteGuardService]},
    {path: '', redirectTo: 'home', pathMatch: 'full'}
  ];