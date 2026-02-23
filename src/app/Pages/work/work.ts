import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-work',
  imports: [AsyncPipe],
  templateUrl: './work.html',
  styleUrl: './work.css',
})
export class Work {
  private activatedRoute = inject(ActivatedRoute);

  readonly workSubscription$ = this.activatedRoute
                                   .data
                                   .pipe(
                                      map((workData) => workData['work'])
                                    );

}
