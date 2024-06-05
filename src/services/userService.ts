import {apiService} from "./apiService";
import {urls} from "../constants/urls";
import {IUserModel} from "../models/IUserModels/IUserModel";
import {AxiosResponse} from "axios";

const userService = {
    getAllUsers:  async ():Promise<AxiosResponse<IUserModel[]>> => {
       return  await apiService.get<IUserModel[]>(urls.usersUrl);
    }
}
export {
    userService
}