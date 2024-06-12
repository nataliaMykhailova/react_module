import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";
import {ICommentModel} from "../models/ICommentModel";
import {create} from "zustand";

type StoreType = {
    userStore:{
        allUsers: IUserModel[],
        loadAllUsers:(users:IUserModel[])=>void,
    },
    postStore:{
        allPosts: IPostModel[],
        loadAllPosts:(posts:IPostModel[])=>void,
    },
    commentsStore:{
        allComments:ICommentModel[],
        loadAllComments:(comments:ICommentModel[])=>void,
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
        }
    }
})