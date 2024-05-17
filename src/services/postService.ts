import {IResponse} from "../types/responseType";
import {IPostModel} from "../models/postModels/IPostModel";
import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const postService = {
    getAllPosts: ():IResponse<IPostModel[]> => {
        return apiService.get(urls.postsUrl)
    },
    getPostsOfSingleUser: (userId:number):IResponse<IPostModel[]> =>{
        return apiService.get(urls.postsOfSingleUserUrl+userId)
    }
}
export {
    postService
}