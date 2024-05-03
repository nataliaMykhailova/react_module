import axios, {AxiosResponse} from "axios";
import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";
import {ICommentModel} from "../models/ICommentModel";

let axiosInstance = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com",
    headers: {'charset': 'UTF-8', "Content-Type": "application/json"}
});
let requests = {
    users: {
        getAllUsers:():Promise<AxiosResponse<IUserModel[]>> => {
            return axiosInstance.get('/users');
        }
    },
    posts:{
        getPostsOfOneUser:(userId:number):Promise<AxiosResponse<IPostModel[]>> =>{
            return axiosInstance.get('/posts?userId='+userId)
}

    },
    comments:{
        getCommentsOfOnePost:(postId:number):Promise<AxiosResponse<ICommentModel[]>> =>{
            return axiosInstance.get('/comments?postId='+postId)
        }
    }
}
export {
    requests
}