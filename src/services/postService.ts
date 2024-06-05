import {AxiosResponse} from "axios";
import {IPostModel} from "../models/IPostModel";
import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const postService = {
    getAllPosts: async ():Promise<AxiosResponse<IPostModel[]>> =>{
        return await apiService.get<IPostModel[]>(urls.postsUrl);
    }
}
export {
    postService
}