import {createContext, useContext} from "react";
import {IUserModel} from "../models/IUserModels/IUserModel";
import {IPostModel} from "../models/IPostModel";
import {ICommentModel} from "../models/ICommentModel";
type StoreType = {
    usersStore:{
        allUsers: IUserModel[];
        setFavouriteUser:(obg:IUserModel)=>void;
        favouriteUser: IUserModel | null;
    },
    postsStore:{
        allPosts: IPostModel[];
        setFavouritePost:(obg:IPostModel)=>void;
        favouritePost: IPostModel | null;
    },
    commentsStore:{
        allComments: ICommentModel[];
        setFavouriteComment:(obg:ICommentModel)=>void;
        favouriteComment: ICommentModel | null;
    },
}
export const defaultValue:StoreType = {
    usersStore:{
        allUsers:[],
        setFavouriteUser:()=>{},
        favouriteUser: null,
    },
    postsStore:{
        allPosts:[],
        setFavouritePost:()=>{},
        favouritePost: null,
    },
    commentsStore:{
        allComments:[],
        setFavouriteComment:()=>{},
        favouriteComment: null
    }
}

export const Context = createContext<StoreType>(defaultValue);
export const useContextProvider = ():StoreType =>useContext(Context);
