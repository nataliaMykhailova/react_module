import {AxiosResponse} from "axios";

import {apiService} from "./apiService";
import {urls} from "../constants/urls";
import {IUserModel} from "../models/IUserModels/IUserModel";
import {IPostModel} from "../models/IPostModel";

const userService = {
    getAll: async ():Promise<AxiosResponse<IUserModel[]>> => {
        return await apiService.get(urls.users.base);
    },
    getById: async (id:string):Promise<AxiosResponse<IUserModel>> => {
        return await apiService.get(urls.users.byId(+id))
    },
    getPosts: async (userId: string):Promise<AxiosResponse<IPostModel[]>> => {
        return await apiService.get(urls.users.byId(+userId) + urls.posts.base)
    },
}


export {
    userService
}