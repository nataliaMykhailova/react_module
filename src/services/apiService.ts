import axios, {AxiosResponse} from "axios";
import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";
import {ICommentModel} from "../models/ICommentModel";

const apiService = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com',
    headers: {"Content-Type": "application/json"}
});
const userService = {
    getAll:async ():Promise<AxiosResponse<IUserModel[]>> => {
        return await apiService.get('/users');
    }
}
const postService = {
    getAll:async ():Promise<AxiosResponse<IPostModel[]>> => {
        return await apiService.get('/posts');
    }
}
const commentService = {
    getAll:async ():Promise<AxiosResponse<ICommentModel[]>> => {
        return await apiService.get('/comments');
    }
}
export {
    userService,
    postService,
    commentService
}
