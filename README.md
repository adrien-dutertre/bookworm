# Bookworm
Une mini-application de recherche et gestion de livres


This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.1.4.

## Mise en place
Pour installer les dépendances (notamment tailwindcss et bootstrap), lancer la commande:

```bash
npm install
```

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Architecture
Le login protège l'application, il y a un guard pour vérifier l'authentification de l'utilisateur (via un service Authentification).
Le service SearchService centralise toutes les demandes de requète ainsi que des utilitaires pour faciliter ces recherches.

Les pages d'ouvrage et d'auteur.ice ont des données pré-chargées avec des resolvers, qui requètent via le SearchService.
(En cas d'erreur sur l'URL de ces 2 pages, on arrive sur une page 404.)

Les favoris sont gérés via un service Favorites.

## Améliorations
Si je prenais plus de temps, voici quelques features pour continuer :
- Ajout de la pagination pour les listes d'oeuvres
- Mettre la requète dans le paramétrage de la route, pour pouvoir relancer
- Charger les images en cache
Quelques points de dév :
- Si l'appli grossit, séparer les services de recherche pour les spécialiser
- Des tests des composants et E2E
- Aller taper sur les doigts de l'API pour assainir sa base de données et compléter sa documentation

## To Fix
Avec plus de temps, voici quelques problèmes à régler :
- Rendre la navBar responsive (j'ai dû l'enlever suite à un bug de Bootstrap)
- Parfois, le nom des auteur.ice.s n'apparaît pas dans la fiche