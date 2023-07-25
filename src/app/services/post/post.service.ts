import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { Post } from '../../model/Post';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiUrl = "https://angular-blog-h0wf.onrender.com/posts";

  constructor(private http:HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }

  deletePost(post: Post): Observable<Post>{
    const url = `${this.apiUrl}/${post.id}`;
    return this.http.delete<Post>(url);
  }

  createPost(post: any): Observable<any>{
    return this.http.post(this.apiUrl, post, httpOptions);
  }

  getPost(id: number): Observable<Post>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Post>(url);
  }

  updatePost(post: any): Observable<any>{
    const url = `${this.apiUrl}/${post.id}`;
    return this.http.put<Post>(url, post, httpOptions);
  }
}