import { Component, OnInit } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [],
  templateUrl: './blog.component.html',
})
export class BlogComponent implements OnInit {
  ngOnInit(): void {
    // TODO: add BlogService to fetch blogposts from backend
  }
}
