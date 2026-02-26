import { Routes } from '@angular/router';
import { Login } from './Pages/login/login';
import { authGuard } from './Guards/auth-guard';
import { workResolver } from './Services/Resolvers/work-resolver';
import { authorResolver } from './Services/Resolvers/author-resolver';
import { authorWorksResolver } from './Services/Resolvers/author-works-resolver';

export const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' }, // Pas de page d'accueil pour le moment donc redirection automatique vers la recherche
  {
    path: 'search',
    title: 'Bookworm - Rechercher',
    canActivate: [authGuard],
    loadComponent: () => import('./Pages/search/search').then((module) => module.Search),
  },
  {
    path: 'favorites',
    title: 'Bookworm - Favoris',
    canActivate: [authGuard],
    loadComponent: () => import('./Pages/favorites/favorites').then((module) => module.Favorites),
  },
  {
    path: 'work/:id',
    title: 'Bookworm',
    canActivate: [authGuard],
    resolve: {
      work: workResolver,
    },
    loadComponent: () => import('./Pages/work/work').then((module) => module.Work),
  },
  {
    path: 'author/:id',
    title: 'Bookworm',
    canActivate: [authGuard],
    resolve: {
      author: authorResolver,
      works: authorWorksResolver,
    },
    loadComponent: () => import('./Pages/author/author').then((module) => module.Author),
  },

  { path: 'login', component: Login, title: 'Bookworm - Connexion' },
  {
    path: '404',
    title: 'Bookworm - Erreur 404',
    loadComponent: () => import('./Pages/not-found/not-found').then((module) => module.NotFound),
  },
  { path: '**', redirectTo: '' },
];
