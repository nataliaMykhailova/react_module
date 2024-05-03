import React, {FC, useState} from 'react';
import UsersComponent from "./components/users/UsersComponent";
import PostsComponent from "./components/posts/PostsComponent";
import {requests} from "./servises/jph.api.servise";
import {ICommentModel} from "./models/ICommentModel";
import CommentsComponent from "./components/comments/CommentsComponent";
import './App.css';

const App:FC = () =>  {
    const [selectedUserId, setSelectedUserId] = useState<number>(0);
    const [comments, setComments] = useState<ICommentModel[]>([]);

    const liftPosts = (userId: number) => {
        requests.posts.getPostsOfOneUser(userId).then(({ data }) => {
            setSelectedUserId(userId);
            setComments([]); // Clear comments when selecting a new user
        });
    };

    const liftComments = (postId: number) => {
        requests.comments.getCommentsOfOnePost(postId).then(({ data }) => {
            setComments(data);
        });
    };
  return (
      <>
          <UsersComponent liftPosts={liftPosts} />
                  <PostsComponent userId={selectedUserId} liftComments={liftComments} />
                  <CommentsComponent comments={comments} />

      </>
  );
}

export default App;
