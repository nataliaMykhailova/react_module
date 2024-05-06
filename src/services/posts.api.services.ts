import axios, {AxiosResponse} from "axios";
import {IPostsResponseModel} from "../models/IResponseModels/IPostsResponseModel";

let axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {"Content-Type": "application/json"}
});

let postRequests = {
  getPostsOfExactUser:(userId:number):Promise<AxiosResponse<IPostsResponseModel>> => {
      return axiosInstance.get('/posts/user/'+userId)
  }
}
export {
    postRequests
}