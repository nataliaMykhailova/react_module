import {IResponce as Iresponce} from "../type/responceType";
import {ICommentModel} from "../models/commentsModels/ICommentModel";
import {apiService} from "./apiServices";
import {urls} from "../constants/urls";

const commentsService = {
    getAllComments: ():Iresponce<ICommentModel[]> => {
        return apiService.get(urls.commentsUrl);
    },
    getCommentsOfSinglePost: (postId: string):Iresponce<ICommentModel[]> => {
        return apiService.get(urls.postsUrl +'/'+ postId + urls.commentsUrl);
    }
};
export {
    commentsService
}