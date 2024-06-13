import {AxiosResponse} from "axios";

import {IUserModel} from "../models/IUserModels/IUserModel";
import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const userService = {
    getAllUsers: async ():Promise<AxiosResponse<IUserModel[]>> => {
        return await apiService.get(urls.usersUrl)
    }
}
export {
    userService
}