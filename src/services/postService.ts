import {AxiosResponse} from "axios";

import {IPostModel} from "../models/IPostModel";
import {apiService} from "./apiService";
import {urls} from "../constants/urls";
import {ICommentModel} from "../models/ICommentModel";

const postService = {
    getAll: async (): Promise<AxiosResponse<IPostModel[]>> => {
        return await apiService.get(urls.posts.base);
    },
    getById: async (id: string): Promise<AxiosResponse<IPostModel>> => {
        return await apiService.get(urls.posts.byId(+id))
    },
    getComments: async (id: string): Promise<AxiosResponse<ICommentModel[]>> => {
        return await apiService.get(urls.posts.getComment(+id))
    }
}

export {
    postService
}