import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-author',
  imports: [],
  templateUrl: './author.html',
  styleUrl: './author.css',
})
export class Author {
  authorId = signal('');
  private activatedRoute = inject(ActivatedRoute);

  constructor() {
    this.activatedRoute
        .params
        .subscribe(
          (params) => {
            this.authorId
                .set(params['id']);
          });
  }
}
