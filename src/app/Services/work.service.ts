import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { filter, Observable, tap } from 'rxjs';
import { iWork, iSearchWorks } from './work.interface';

@Injectable({
  providedIn: 'root',
})
export class WorkService {
  private http = inject(HttpClient);

  work = signal<iWork>({} as iWork);
  works = signal<iWork[]>([]);

  private readonly work_api_URL: string = "https://openlibrary.org/works/";
  private readonly search_api_URL: string = "https://openlibrary.org/search.json"

  // Détail d'un ouvrage
  getFullWork(workId: string) : Observable<iWork> {
    return this.http
               .get<iWork>(this.work_api_URL+`${workId}.json`)
               .pipe(
                tap((requestedWork) => this.work.set(requestedWork))
               );
  }

  private baseParameters = new HttpParams();

  // Liste d'ouvrages
  getWorks(query: string) : Observable<iSearchWorks> {
    return this.http
               .get<iSearchWorks>(
                this.search_api_URL, 
                {
                  params: this.baseParameters.set('q', query)
                })
               .pipe(
                tap((search) => this.works.set(search.docs))
               );
  }

  // Fonction pour récupérer la clé d'un ouvrage
  getWorkKey(rawKey: string) : string {
    return rawKey.substring(7);
  }
}
