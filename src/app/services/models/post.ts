import { ApplicationUser } from "./application-user";
import { Vestimonial } from "./vestimonial";

export class Post {
    postId: number;
    applicationUser: ApplicationUser;
    postInfo: string;
    numLikes: number;
    createdDateTime: Date;
    vestimonials: Vestimonial[];
    likes: ApplicationUser[];
    isInView: boolean;
    

 

  

    }




