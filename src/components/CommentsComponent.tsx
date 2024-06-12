import React from 'react';
import {useStore} from "../context/ContextProvider";

const CommentsComponent = () => {
    const {commentsStore:{allComments}}=useStore();
    return (
        <div style={{marginTop:85, fontSize:30}}>
            {

                allComments.map(comment =>
                    <div key={comment.id}>{comment.id}, postId - {comment.postId}, body: {comment.body}</div>)
            }


        </div>
    );
};

export default CommentsComponent;