import { Component, inject, linkedSignal, signal } from '@angular/core';
import { Authentication } from '../../Services/authentication';
import { email, form, FormField, required } from '@angular/forms/signals';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormField],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  protected readonly authenticationService = inject(Authentication);
  loginModel = signal({
    email: '',
    password: '',
  });

  readonly router = inject(Router);
  
  // Création du formulaire et contraintes des champs
  loginForm = form(this.loginModel, (schemaPath) => {
    required(schemaPath.email, {message: 'Email requis'});
    email(schemaPath.email, {message: 'Veuillez saisir un email valide'});
    required(schemaPath.password, {message: 'Mot de passe requis'});
  });

  emailValidity = linkedSignal(() => this.loginForm.email().touched() && this.loginForm.email().invalid());
  passwordValidity = linkedSignal(() => this.loginForm.password().touched() && this.loginForm.password().invalid());
  formValidity: boolean = true;

  // Connexion de l'utilisateur
  login(event: Event) :void {
    event.preventDefault();
    const formData = this.loginModel();
    if (this.authenticationService.authenticate(formData.email, formData.password)) {
      this.authenticationService.login();
      this.router.navigateByUrl('');
    } else {
      this.formValidity = false;
    };
  }

}
