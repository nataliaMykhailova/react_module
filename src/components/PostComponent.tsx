import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {IPostModel} from "../models/IPostModel";
import {joiResolver} from "@hookform/resolvers/joi";
import {postValidator} from "../validators/postValidator";
import {IPostFormModel} from "../models/IPostFormModel";
import {postServices} from "../services/postService";
import styles from './postStyles.module.css'

const PostComponent = () => {
    let {register,
        handleSubmit,
        formState:{errors}} = useForm<IPostModel>({mode: "all", resolver: joiResolver(postValidator)});
    const [post, setPost] = useState<IPostModel | null>(null);
    const save = async ({userId, title, body}:IPostFormModel)=>{
        setPost((await postServices.savePost({userId, title, body})).data);

    }
    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <label className={styles.label}><input type={"number"} placeholder={'user ID'} {...register('userId')}/></label>
                {errors.userId && <p>{errors.userId.message}</p>}
                <label className={styles.label}><input id={'title'} type={"text"} placeholder={'title'} {...register('title')}/></label>
                {errors.title && <p>{errors.title.message}</p>}
                <label className={styles.label}><input id={'body'} type={"text"} placeholder={'body'} {...register('body')}/>
                    {errors.body && <p>{errors.body.message}</p>}</label>
                <button>save</button>
                {post && <p>User Id - {post.userId} <br/> Title - {post.title} <br/> Body - {post.body}</p>}
            </form>
        </div>
    );
};

export default PostComponent;