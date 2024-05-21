import {IResponce as Iresponce} from "../type/responceType";
import {IPostModel} from "../models/postModels/IPostModel";
import {apiService} from "./apiServices";
import {urls} from "../constants/urls";

const postService = {
    getAllPosts: ():Iresponce<IPostModel[]> => {
        return apiService.get(urls.postsUrl);
    },
    getPostsOfSingleUser: (userId: string):Iresponce<IPostModel[]> => {
        return apiService.get(urls.usersUrl +'/'+ userId + urls.postsUrl)
    }
}
export {
    postService
}