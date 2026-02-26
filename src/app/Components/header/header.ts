import { Component, inject, OnInit } from '@angular/core';
import { Authentication } from '../../Services/authentication';
import { Router, RouterLink } from '@angular/router';
import { FavoritesService } from '../../Services/favorites.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit {
  readonly authenticationService = inject(Authentication);
  readonly router = inject(Router);
  readonly favoritesService = inject(FavoritesService);

  // Déconnexion
  logout(): void {
    this.authenticationService.logout();
    this.router.navigateByUrl('/login');
  }

  ngOnInit(): void {
    this.favoritesService.loadFavorites();
  }
}
