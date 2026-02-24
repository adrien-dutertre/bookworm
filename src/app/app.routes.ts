import { Routes } from '@angular/router';
import { Login } from './Pages/login/login';
import { authGuard } from './Guards/auth-guard';
import { Search } from './Pages/search/search';
import { Work } from './Pages/work/work';
import { Author } from './Pages/author/author';
import { Favorites } from './Pages/favorites/favorites';
import { workResolver } from './Services/Resolvers/work-resolver';
import { authorResolver } from './Services/Resolvers/author-resolver';
import { NotFound } from './Pages/not-found/not-found';

export const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' }, // Pas de page d'accueil pour le moment donc redirection automatique vers la recherche
  { path: 'search', component: Search, title: 'Recherche', canActivate: [authGuard] },
  { path: 'favorites', component: Favorites, title: 'Favoris', canActivate: [authGuard] },
  {
    path: 'work/:id',
    component: Work,
    title: 'Ouvrage',
    canActivate: [authGuard],
    resolve: {
      work: workResolver,
    },
  },
  {
    path: 'author/:id',
    component: Author,
    canActivate: [authGuard],
    resolve: {
      author: authorResolver,
    },
  },

  { path: 'login', component: Login, title: 'Connexion' },
  { path: '404', component: NotFound, title: 'Erreur 404'},
  { path: '**', redirectTo: '' },
];
