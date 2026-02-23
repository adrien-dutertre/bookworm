import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-author',
  imports: [AsyncPipe],
  templateUrl: './author.html',
  styleUrl: './author.css',
})
export class Author {
  private activatedRoute = inject(ActivatedRoute);

  readonly authorSubscription$ = this.activatedRoute
                                     .data
                                     .pipe(
                                        map((authorData) => authorData['author'])
                                      );
}
