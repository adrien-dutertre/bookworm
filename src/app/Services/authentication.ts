import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class Authentication {
  private userAuthentication: boolean = false;

  // Identification de l'utilisateur
  authenticate(userEmail: string, userPassword: string): boolean {
    return userEmail === "admin@test.com" && userPassword === "password";
  }

  // Connexion de l'utilisateur
  login(): void {
    localStorage.setItem("userAuthenticated", "true");
    this.userAuthentication = true;
  }

  // Déconnexion de l'utilisateur
  logout() : void {
    localStorage.setItem("userAuthenticated", "false");
    this.userAuthentication = false;
  }

  // Définit si l'utilisateur est identifié et connecté
  isAuthenticate(): boolean {
    return this.userAuthentication;
  }
}
