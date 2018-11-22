import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { HttpHeaders, HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PostDataService {

  private readonly headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('access_token')
  });

  constructor(private http: HttpClient) { }

  //CREATE 
  async createPost(post:Post) {
    const postRequest = this.http.post<Post>("http://localhost:8080/vestimony/posts", post, { headers: this.headers });
    const postResponse = await postRequest.toPromise();
    return postResponse;
  }

  //CREATE POST IMAGE
  async createPostImage(file: File, postId: number) {

    let fd: FormData = new FormData();
    fd.append('file', file);

    const imgheaders = new HttpHeaders()
      .set('Authorization', localStorage.getItem('access_token'));
    const postRequest = this.http.post("http://localhost:8080/vestimony/posts/image/"+postId, fd, { headers: imgheaders, responseType:'text' });
    const postResponse = await postRequest.toPromise();
    return postResponse;
  }

  //GET POSTS FOLLOWING
  async getPostData() {
    const followingPostsRequest = this.http.get<Post[]>("http://localhost:8080/vestimony/follow", { headers: this.headers });
    const followingPostsResponse = await followingPostsRequest.toPromise();
    return followingPostsResponse;
  }

  //GET ALL POSTS
  async getAllPosts() {
    const followingPostsRequest = this.http.get<Post[]>("http://localhost:8080/vestimony/posts", { headers: this.headers });
    const followingPostsResponse = await followingPostsRequest.toPromise();
    return followingPostsResponse;
  }

  //GET POSTS FOR A PROFILE
  async getPostDataForProfile(userId: number) {
    const postsRequest = this.http.get<Post[]>("http://localhost:8080/vestimony/posts/" + userId + "/posts", { headers: this.headers });
    const postsResponse = await postsRequest.toPromise();
    return postsResponse;
  }

  //GET A POST BY ID
  async getPost(postId: number) {
    const postRequest = this.http.get<Post>("http://localhost:8080/vestimony/posts/" + postId, { headers: this.headers });
    const postResponse = await postRequest.toPromise();
    return postResponse;
  }


  //LIKE A POST
  async likePost(postId: number) {
    const likePostRequest = this.http.get("http://localhost:8080/vestimony/posts/" + postId + "/like", { headers: this.headers, responseType: 'text' });
    const likePostsResponse = await likePostRequest.toPromise();
    return likePostsResponse;
  }


  async unlikePost(postId: number) {
    const unlikePostRequest = this.http.get("http://localhost:8080/vestimony/posts/" + postId + "/unlike", { headers: this.headers, responseType: 'text' });
    const unlikePostsResponse = await unlikePostRequest.toPromise();
    return unlikePostsResponse;
  }

  async isLiked(postId: number) {
    const isLikedRequest = this.http.get<boolean>("http://localhost:8080/vestimony/posts/" + postId + "/isliked", { headers: this.headers });
    const isLikedResponse = await isLikedRequest.toPromise();
    return isLikedResponse;
  }

  async getLikedPosts() {
    const getLikedPostsRequest = this.http.get<Post[]>("http://localhost:8080/vestimony/users/likedposts", { headers: this.headers });
    const getLikedPostsResponse = await getLikedPostsRequest.toPromise();
    return getLikedPostsResponse;
  }

  async getPostsForItem(itemId: number) {
    const getPostsRequest = this.http.get<Post[]>("http://localhost:8080/vestimony/posts/foritem/" + itemId, { headers: this.headers });

    const getPostsResponse = await getPostsRequest.toPromise();
    return getPostsResponse;
  }

  async getTrending() {
    const getPostsRequest = this.http.get<Post[]>("http://localhost:8080/vestimony/posts/trending", { headers: this.headers });

    const getPostsResponse = await getPostsRequest.toPromise();
    return getPostsResponse;

  }
}
