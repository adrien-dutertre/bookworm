import { Routes } from '@angular/router';
import { Login } from './Pages/login/login';
import { Home } from './Pages/home/home';
import { authGuard } from './Guards/auth-guard';

export const routes: Routes = [
  { path: '', component: Home, title: 'Accueil', canActivate: [authGuard] },
  { path: 'login', component: Login, title: 'Connexion' },
  { path: '**', redirectTo: ''},
];
