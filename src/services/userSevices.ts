import {IResponce} from "../type/responceType";
import {IUserModel} from "../models/userModels/IUserModel";
import {apiService} from "./apiServices";
import {urls} from "../constants/urls";

const userService = {
    getAllUsers: ():IResponce<IUserModel[]> => {
        return apiService.get(urls.usersUrl)
    }
}
export {
    userService
}