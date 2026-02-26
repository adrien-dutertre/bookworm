// import { ResolveFn } from '@angular/router';
// import { concatMap, from, Observable, scan, take, toArray } from 'rxjs';
// import { singleWork } from '../Interface/utils.interface';
// import { inject } from '@angular/core';
// import { SearchService } from '../search.service';
// import { Favorites } from '../favorites.service';

// export const favoritesResolver: ResolveFn<boolean> = (route, state): Observable<singleWork[]> => {
//   const searchService = inject(SearchService);
//   const favoritesService = inject(Favorites);
//   return from(favoritesService.favorites()).pipe(
//     concatMap(favoriteKey => 
//       searchService.getFullWork(favoriteKey)
//     ),
//     scan((all: singleWork[], work) => ([...all, work]), []),
//   );
// };

    // concatMap(favoriteKey => 
    //   searchService.getFullWork(favoriteKey)
    // ),
    // take(favoritesService.favorites()
    //                      .length),
    // toArray()
