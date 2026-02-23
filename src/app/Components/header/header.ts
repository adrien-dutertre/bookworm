import { Component, inject } from '@angular/core';
import { Authentication } from '../../Services/authentication';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  readonly authenticationService = inject(Authentication);
  readonly router = inject(Router);

  // Déconnexion
  logout(): void {
    this.authenticationService.logout();
    this.router.navigateByUrl('/login');
  }
}
