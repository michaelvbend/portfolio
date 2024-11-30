import { Component, OnInit } from '@angular/core';
import { AsyncPipe, NgStyle, NgTemplateOutlet } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize, map, Observable } from 'rxjs';
import { Blog } from '../blog.interface';
import { BlogService } from '../../../features/services/blog.service';

@Component({
  selector: 'app-blog-article',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './blog-article.component.html',
})
export class BlogArticleComponent implements OnInit {
  $article!: Observable<Blog>;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService
  ) {}

  ngOnInit(): void {
    this.setProject();
  }

  private setProject() {
    this.$article = this.blogService
      .getBlogArticles(this.route.snapshot.params['slug'])
      .pipe(map((result) => result[0]));
  }

  private convertRouteParams() {}
}
