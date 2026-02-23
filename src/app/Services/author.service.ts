import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { iAuthor } from './author.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthorService {
  private http = inject(HttpClient);

  author = signal<iAuthor>({} as iAuthor);

  private readonly api_URL: string = 'https://openlibrary.org/authors/';

  // Détail d'un.e auteur.ice
  getDetailledAuthor(authorId: string): Observable<iAuthor> {
    return this.http
               .get<iAuthor>(this.api_URL + `${authorId}.json`)
               .pipe(
                tap((requestedAuthor) => this.author.set(requestedAuthor))
                );
  }
}
