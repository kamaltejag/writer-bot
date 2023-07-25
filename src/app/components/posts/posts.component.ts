import { Component, Input, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post/post.service';
import { Post } from '../../model/Post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  @Input() colClass: any;

  posts?: Post[];

  constructor(private postService: PostService ) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe((posts) => this.posts = posts);
  }

  deletePost(post: Post){
    this.postService.deletePost(post).subscribe(() => this.posts = this.posts?.filter(p => p.id != post.id));
  }
}