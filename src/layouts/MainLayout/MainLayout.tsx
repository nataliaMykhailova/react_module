import React, {useEffect, useState} from 'react';
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import {Outlet} from "react-router-dom";
import {Context} from "../../context/ContextProvider";
import {IUserModel} from "../../models/IUserModels/IUserModel";
import {IPostModel} from "../../models/IPostModel";
import {ICommentModel} from "../../models/ICommentModel";
import {userService} from "../../services/userService";
import {postService} from "../../services/postService";
import {commentsService} from "../../services/commentsService";

const MainLayout = () => {
    const [users, setUsers] = useState<IUserModel[]>([]);
    const [posts, setPosts] = useState<IPostModel[]>([]);
    const [comments, setComments] = useState<ICommentModel[]>([]);
    const [favouriteUserState, setFavouriteUserState] = useState<IUserModel | null>(null);
    const [favouritePostState, setFavouritePostState] = useState<IPostModel | null>(null);
    const [favouriteCommentState, setFavouriteCommentState] = useState<ICommentModel | null>(null);

    useEffect(() => {
        userService.getAllUsers().then(({data}) => setUsers(data));
        postService.getAllPosts().then(({data}) => setPosts(data));
        commentsService.getAllComments().then(({data}) => setComments(data));

    }, []);
    const setFavouriteUser= (user: IUserModel) => {
        setFavouriteUserState(user)
    };
    const setFavouritePost= (post: IPostModel) => {
        setFavouritePostState(post)
    };
    const setFavouriteComment= (comment: ICommentModel) => {
        setFavouriteCommentState(comment)
    };

    return (
        <div>
            <HeaderComponent/>
            <Context.Provider value={{
                usersStore: {
                    allUsers: users,
                    setFavouriteUser: (obg: IUserModel) => setFavouriteUser(obg),
                    favouriteUser: favouriteUserState,
                },
                postsStore: {
                    allPosts: posts,
                    setFavouritePost: (obg:IPostModel)=> setFavouritePost(obg),
                    favouritePost: favouritePostState,
                },
                commentsStore: {
                    allComments: comments,
                    setFavouriteComment: (obg:ICommentModel)=>setFavouriteComment(obg),
                    favouriteComment: favouriteCommentState
                }

            }}>
                <Outlet/>
            </Context.Provider>

        </div>
    );
};

export default MainLayout;