import {IUserModel} from "../IUserModels/IUserModel";
import {IPostModel} from "../IPostModel";

export type UserWithPostsType = IUserModel & {posts: IPostModel[]};