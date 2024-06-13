import {AxiosResponse} from "axios";

import {ICommentModel} from "../models/ICommentModel";
import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const commentService = {
    getAllComments: async ():Promise<AxiosResponse<ICommentModel[]>> =>{
        return await apiService.get(urls.commentsUrl);
    }
}
export {
    commentService
}