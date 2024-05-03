import React, {FC} from 'react';
import {IPostModel} from "../../models/IPostModel";
interface IPostProps{
    post: IPostModel;
    liftComments?: (postId: number) => void;
}
const PostComponent: FC<IPostProps> = ({post, liftComments}) => {
    const onClickHandlerComments = () => {
        if (liftComments) {
            liftComments(post.id);
        }

    };
    return (
        <div>
            <h3>{post.id} - {post.title}</ h3>
            <h6>{post.body}</h6>
            <p>User Id - {post.userId}</p>
            <button onClick={onClickHandlerComments}> Show comments of post</button>
        </div>
    );
};


export default PostComponent;