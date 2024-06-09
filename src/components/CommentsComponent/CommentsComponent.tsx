import React, {useEffect} from 'react';
import {useStore} from "../../context/ContextProvider";
import CommentComponent from "../CommentComponent/CommentComponent";

const CommentsComponent = () => {
    const {commentsStore:{allComments}}=useStore();
    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [allComments]);
    return (
        <div>
            {
                allComments.map(comment =><div  key={comment.id} id={`comment-${comment.id}`}><CommentComponent comment={comment}/></div>)
            }

        </div>
    );
};

export default CommentsComponent;