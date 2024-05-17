import {IResponse} from "../types/responseType";
import {ICommentModel} from "../models/commentModels/ICommentModel";
import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const commentsService = {
    getAllComments: ():IResponse<ICommentModel[]>=>{
        return apiService.get(urls.commentsUrl)
    },
    getCommentsOfSinglePost: (postId:number):IResponse<ICommentModel[]>=>{
        return apiService.get(urls.commentsOfSinglePostUrl+postId)
    }
}
export {
    commentsService
}