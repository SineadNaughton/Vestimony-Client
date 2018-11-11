import { Injectable } from '@angular/core';
import { Post } from '../models/post';


@Injectable({
  providedIn: 'root'
})
export class PostDataService {

  constructor() { }

  getData(): Post[] {
    return [
      { title: "Post 1", summary: "about this post" },
      { title: "Post 2", summary: "about this post2asdjflkjsdalfkgjasdlfkgmdflkmvblksfdnmblksndfklgjbnfdlkgvnsdfklng dfkgjsdlfkjglksdjfglkjsdlkfgj  dslkfjglksdfjglks dflkjglksdfjglksdfjglksdfj" }
    ]
  }
}
