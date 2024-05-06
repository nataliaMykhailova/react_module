import axios, {AxiosResponse} from "axios";
import { IUsersResponseModel} from "../models/IResponseModels/IUsersResponseModel";

let axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {"Content-Type": "application/json"}
});
let userRequests={
    getAllUsers : ():Promise<AxiosResponse<IUsersResponseModel>> => {
        return axiosInstance.get('/users')
    }
}
export {
    userRequests
}