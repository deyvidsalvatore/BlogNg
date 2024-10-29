import { Component, OnInit } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { map, Observable, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  posts$: Observable<ScullyRoute[]> | undefined;
  destroy$: Subject<void> = new Subject<void>;

  constructor(private scullyService: ScullyRoutesService) {}

  ngOnInit(): void {
    this.posts$ = this.scullyService.available$.pipe(
      map(posts => posts.filter(post => post.title)),
      takeUntil(this.destroy$)
    );
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
