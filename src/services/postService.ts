import axios, {AxiosResponse} from "axios";
import {IPostFormModel} from "../models/IPostFormModel";
import {IPostModel} from "../models/IPostModel";

const axiosInstance = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com',
    headers:{"Content-Type": "application/json"},
});
const postServices={
    savePost : ({userId, title, body}:IPostFormModel):Promise<AxiosResponse<IPostModel>> => {
       return  axiosInstance.post(`/posts`, {userId, title, body}, {headers: {"Content-Type": "application/json"}});

    }
}
export {
    postServices
}