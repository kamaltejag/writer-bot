import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Post } from '../../model/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post: any;
  @Output() onDeletePost: EventEmitter<Post> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(post: Post){
    this.onDeletePost.emit(post);
  }
}