import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { HttpHeaders, HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PostDataService {

  

  constructor(private http: HttpClient) { }

  async getPostData() {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('access_token')
    });

    const followingPostsRequest = this.http.get<Post[]>("http://localhost:8080/vestimony/follow", {headers});

    const followingPostsResponse = await followingPostsRequest.toPromise();
    return followingPostsResponse;
  }

  async likePost(postId: number){

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('access_token')
    });
    const likePostRequest = this.http.get("http://localhost:8080/vestimony/posts/"+postId+"/like", {headers, responseType:'text'});
    const likePostsResponse = await likePostRequest.toPromise();
    return likePostsResponse;
  }


  async unlikePost(postId: number){

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('access_token')
    });
    const unlikePostRequest = this.http.get("http://localhost:8080/vestimony/posts/"+postId+"/unlike", {headers, responseType:'text'});
    const unlikePostsResponse = await unlikePostRequest.toPromise();
    return unlikePostsResponse;
  }

  async isLiked(postId: number){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('access_token')
    });

    const isLikedRequest = this.http.get<boolean>("http://localhost:8080/vestimony/posts/"+postId+"/isliked", {headers});
    const isLikedResponse = await isLikedRequest.toPromise();
    return isLikedResponse;
  }

  async getLikedPosts(){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('access_token')
    });

    const getLikedPostsRequest = this.http.get<Post[]>("http://localhost:8080/vestimony/users/likedposts", {headers});

    const getLikedPostsResponse = await getLikedPostsRequest.toPromise();
    return getLikedPostsResponse;
  }
}
