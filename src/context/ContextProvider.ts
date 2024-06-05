import {createContext, useContext} from "react";
import {IUserModel} from "../models/IUserModels/IUserModel";
import {IPostModel} from "../models/IPostModel";
import {ICommentModel} from "../models/ICommentModel";
type StoreType = {
    usersStore:{
        allUsers: IUserModel[];
        setFavouriteUser:(obg:IUserModel)=>void;
    },
    postsStore:{
        allPosts: IPostModel[];
        setFavouritePost:(obg:IPostModel)=>void;
    },
    commentsStore:{
        allComments: ICommentModel[];
        setFavouriteComment:(obg:ICommentModel)=>void;
    },
    favourites: {
        favouriteUser: IUserModel | null;
        favouritePost: IPostModel | null;
        favouriteComment: ICommentModel | null;
    };
}
export const defaultValue:StoreType = {
    usersStore:{
        allUsers:[],
        setFavouriteUser:()=>{}
    },
    postsStore:{
        allPosts:[],
        setFavouritePost:()=>{}
    },
    commentsStore:{
        allComments:[],
        setFavouriteComment:()=>{}
    },
    favourites: {
        favouriteUser: null,
        favouritePost: null,
        favouriteComment: null
    }
}

export const Context = createContext<StoreType>(defaultValue);
export const useContextProvider = ():StoreType =>useContext(Context);
