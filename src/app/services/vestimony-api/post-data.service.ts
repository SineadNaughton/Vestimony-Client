import { Injectable, isDevMode } from '@angular/core';
import { Post } from '../models/post';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { VestimonyApiConfig } from './vestimony-api-config';


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
    const postRequest = this.http.post<Post>(VestimonyApiConfig.BASE_URL(isDevMode()) + "/vestimony/posts", post, { headers: this.headers });
    const postResponse = await postRequest.toPromise();
    return postResponse;
  }

  //CREATE POST IMAGE
  async createPostImage(file: File, postId: number) {
    let fd: FormData = new FormData();
    fd.append('file', file);
    const imgheaders = new HttpHeaders()
      .set('Authorization', localStorage.getItem('access_token'));
    const postRequest = this.http.post(VestimonyApiConfig.BASE_URL(isDevMode()) + "/vestimony/posts/image/"+postId, fd, { headers: imgheaders, responseType:'text' });
    const postResponse = await postRequest.toPromise();
    return postResponse;
  }

  //GET POSTS FOLLOWING
  async getPostData() {
    const followingPostsRequest = this.http.get<Post[]>(VestimonyApiConfig.BASE_URL(isDevMode()) + "/vestimony/follow", { headers: this.headers });
    const followingPostsResponse = await followingPostsRequest.toPromise();
    return followingPostsResponse;
  }

  //GET ALL POSTS
  async getAllPosts() {
    const followingPostsRequest = this.http.get<Post[]>(VestimonyApiConfig.BASE_URL(isDevMode()) + "/vestimony/posts", { headers: this.headers });
    const followingPostsResponse = await followingPostsRequest.toPromise();
    return followingPostsResponse;
  }

  //GET POSTS FOR A PROFILE
  async getPostDataForProfile(userId: number) {
    const postsRequest = this.http.get<Post[]>(VestimonyApiConfig.BASE_URL(isDevMode()) + "/vestimony/posts/users/" + userId, { headers: this.headers });
    const postsResponse = await postsRequest.toPromise();
    return postsResponse;
  }

  //GET A POST BY ID
  async getPost(postId: number) {
    const postRequest = this.http.get<Post>(VestimonyApiConfig.BASE_URL(isDevMode()) + "/vestimony/posts/" + postId, { headers: this.headers });
    const postResponse = await postRequest.toPromise();
    return postResponse;
  }


  //LIKE A POST
  async likePost(postId: number) {
    const likePostRequest = this.http.post(VestimonyApiConfig.BASE_URL(isDevMode()) + "/vestimony/posts/liked/" + postId, {}, { headers: this.headers, responseType: 'text' });
    const likePostsResponse = await likePostRequest.toPromise();
    return likePostsResponse;
  }


  async unlikePost(postId: number) {
    const unlikePostRequest = this.http.delete(VestimonyApiConfig.BASE_URL(isDevMode()) + "/vestimony/posts/liked/" + postId, { headers: this.headers, responseType: 'text' });
    const unlikePostsResponse = await unlikePostRequest.toPromise();
    return unlikePostsResponse;
  }

  async isLiked(postId: number) {
    const isLikedRequest = this.http.get<boolean>(VestimonyApiConfig.BASE_URL(isDevMode()) + "/vestimony/posts/liked/" + postId + "/isliked", { headers: this.headers });
    const isLikedResponse = await isLikedRequest.toPromise();
    return isLikedResponse;
  }

  async getLikedPosts() {
    const getLikedPostsRequest = this.http.get<Post[]>(VestimonyApiConfig.BASE_URL(isDevMode()) + "/vestimony/posts/liked", { headers: this.headers });
    const getLikedPostsResponse = await getLikedPostsRequest.toPromise();
    return getLikedPostsResponse;
  }

  async getPostsForItem(itemId: number) {
    const getPostsRequest = this.http.get<Post[]>(VestimonyApiConfig.BASE_URL(isDevMode()) + "/vestimony/posts/foritem/" + itemId, { headers: this.headers });

    const getPostsResponse = await getPostsRequest.toPromise();
    return getPostsResponse;
  }

  async getTrending() {
    const getPostsRequest = this.http.get<Post[]>(VestimonyApiConfig.BASE_URL(isDevMode()) + "/vestimony/posts/trending", { headers: this.headers });

    const getPostsResponse = await getPostsRequest.toPromise();
    return getPostsResponse;

  }
}
