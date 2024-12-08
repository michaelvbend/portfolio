import { Component, OnInit } from '@angular/core';
import {
  AsyncPipe,
  NgComponentOutlet,
  NgStyle,
  NgTemplateOutlet,
} from '@angular/common';
import { BlogService } from '../../features/services/blog.service';
import { finalize, of } from 'rxjs';
import { Blog } from './blog.interface';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-blog',
    imports: [AsyncPipe, NgTemplateOutlet, RouterLink],
    templateUrl: './blog.component.html'
})
export class BlogComponent implements OnInit {
  loading = true;
  $blogArticles = of<Blog[]>([]);
  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.$blogArticles = this.blogService
      .getBlogArticles()
      .pipe(finalize(() => (this.loading = false)));
  }
}
