import {IUserModel} from "../models/userModels/IUserModel";
import {IResponse} from "../types/responseType";
import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const userService = {
    getAllUsers: ():IResponse<IUserModel[]> => {
        return apiService.get(urls.usersUrl);
    },
    getUserById:  (userId:number):IResponse<IUserModel> => {
        return   apiService.get(urls.usersUrl+userId);
    }
}
export {
    userService
}