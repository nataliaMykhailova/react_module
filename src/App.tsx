import React, {FC, useState} from 'react';
import UsersComponent from "./components/Users/UsersComponent";
import {postRequests} from "./services/posts.api.services";
import PostsComponent from "./components/Posts/PostsComponent";
import {IPostModel} from "./models/IPostModels/IPostModel";
import './App.css';

const App:FC = () =>  {
    const [posts, setPosts] = useState<IPostModel[]>([]);
    const lift = (userId:number) => {
        postRequests.getPostsOfExactUser(userId).then(({data:{posts}}) =>setPosts(posts));
    }
  return (
      <div className={'app'}>
          <UsersComponent lift={lift}/>
          <PostsComponent posts={posts}/>
      </div>
  );
}

export default App;
