import { HttpClient, HttpEvent, HttpEventType, HttpParams } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { catchError, Observable, pipe, tap } from 'rxjs';
import { author, singleWork, worksList } from './Interface/utils.interface';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private http = inject(HttpClient);

  // ---- Recherche d'un.e auteur.ice ----
    author = signal<author>({} as author);
  
    private readonly author_api_URL: string = 'https://openlibrary.org/authors/';
  
    // Détail d'un.e auteur.ice
    getDetailledAuthor(authorId: string): Observable<author> {
      return this.http
                 .get<author>(this.author_api_URL + `${authorId}.json`)
                 .pipe(
                    tap((requestedAuthor) => this.author.set(requestedAuthor)),
                    catchError((error) => {
                      console.error('Erreur lors de la récupération de la fiche auteur.ice', error);
                      throw error;
                    })
                  );
    }

  // ---- Recherche d'un unique ouvrage ----
  work = signal<singleWork>({} as singleWork);

  private readonly work_api_URL: string = "https://openlibrary.org/works/";

  // Détail d'un ouvrage
  getFullWork(workId: string) : Observable<singleWork> {
    return this.http
               .get<singleWork>(this.work_api_URL+`${workId}.json`)
               .pipe(
                  tap((requestedWork) => this.work.set(requestedWork)),
                  catchError((error) => {
                      console.error(`Erreur lors de la récupération d'un ouvrage`, error);
                      throw error;
                    })
               );
  }

  // ---- Recherche de plusieurs ouvrages ----
  works = signal<worksList>({} as worksList);
  private readonly search_api_URL: string = "https://openlibrary.org/search.json";

  private baseParameters = new HttpParams();

  // Liste d'ouvrages
  getWorks(query: string) : Observable<worksList> {
    return this.http
               .get<worksList>(
                this.search_api_URL, 
                {
                  params: this.baseParameters.set('q', query)
                })
               .pipe(
                  tap((search) => this.works.set(search)),
                  catchError((error) => {
                    console.error(`Erreur lors de la recherche`, error);
                    throw error;
                  })
               );
  }

  // ---- Fonctions utilitaires ----
  // Fonction pour récupérer la clé d'un ouvrage
  getWorkKey(rawKey: string) : string {
    return rawKey.substring(7);
  }

  // Fonction pour récupérer la clé d'un auteur
  getAuthorKey(rawKey: string): string {
    return rawKey.substring(9);
  }

  // Fonction pour récupérer la couverture de l'ouvrage
  private readonly cover_api_URL = "https://covers.openlibrary.org/b";

  getCover(workKey: string | number): string {
    return `${this.cover_api_URL}/id/${workKey}-M.jpg`;
  }

  // Fonction pour récupérer la photo de l'auteur.ice
  private readonly picture_api_URL = "https://covers.openlibrary.org/a";

  getPicture(authorKey: string) : string {
    return `${this.picture_api_URL}/olid/${authorKey}-M.jpg`;
  }
}
