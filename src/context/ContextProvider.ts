import {IUserModel} from "../models/IUserModels/IUserModel";
import {IPostModel} from "../models/IPostModel";
import {ICommentModel} from "../models/ICommentModel";
import {create} from "zustand";

type StoreType = {
    userStore:{
        allUsers: IUserModel[],
        loadAllUsers:(users:IUserModel[])=>void,
        favouriteUser: IUserModel | null,
        setFavouriteUser:(user:IUserModel)=>void,
    },
    postStore:{
        allPosts: IPostModel[],
        loadAllPosts:(posts:IPostModel[])=>void,
        favouritePost: IPostModel | null,
        setFavouritePost:(post:IPostModel)=>void,
    },
    commentsStore:{
        allComments:ICommentModel[],
        loadAllComments:(comments:ICommentModel[])=>void,
        favouriteComment: ICommentModel | null,
        setFavouriteComment:(comment:ICommentModel)=>void,
    }

}

export const useStore = create<StoreType>()((set)=>{
return{
    userStore:{
        allUsers:[],
        loadAllUsers:(users:IUserModel[])=>{
            return set(state => {
                return {
                    ...state,
                    userStore:{
                        ...state.userStore,
                        allUsers:users
                    }
                }
            })
        },
        favouriteUser:null,
        setFavouriteUser:(user:IUserModel)=>{
            return set(state => {
                return {
                    ...state,
                    userStore:{
                        ...state.userStore,
                        favouriteUser:user
                    }
                }
            })
        }
    },
    postStore:{
        allPosts:[],
        loadAllPosts:(posts:IPostModel[])=>{
            return set(state => {
                return{
                    ...state,
                    postStore:{
                        ...state.postStore,
                        allPosts:posts
                    }
                }
            })
        },
        favouritePost:null,
        setFavouritePost:(post:IPostModel)=>{
            return set(state => {
                return{
                    ...state,
                    postStore:{
                        ...state.postStore,
                        favouritePost:post
                    }
                }
            })
        }
    },
    commentsStore:{
        allComments:[],
        loadAllComments:(comments:ICommentModel[])=>{
            return set(state => {
                return{
                    ...state,
                    commentsStore:{
                        ...state.commentsStore,
                        allComments:comments
                    }
                }
            })
        },
        favouriteComment:null,
        setFavouriteComment:(comment:ICommentModel)=>{
            return set(state => {
                return{
                    ...state,
                    commentsStore:{
                        ...state.commentsStore,
                        favouriteComment:comment
                    }
                }
            })
        }
    }
}
})