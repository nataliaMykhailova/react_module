import React, {FC, useState} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {IPostModel} from "./models/IPostModel";
import {postValidator} from "./validators/postValidator";
import {IPostFormModel} from "./models/IPostFormModel";
import {postServices} from "./services/postService";
import './App.css';
const App:FC = () => {
    let {register,
        handleSubmit,
        formState:{errors}} = useForm<IPostModel>({mode: "all", resolver: joiResolver(postValidator)});
    const [post, setPost] = useState<IPostModel | null>(null);
    const save = ({userId, title, body}:IPostFormModel)=>{
        postServices.savePost({userId, title, body}).then(value => setPost(value.data));

    }
    return (
      <>
          <form onSubmit={handleSubmit(save)}>
              <label ><input type={"number"} placeholder={'user ID'} {...register('userId')}/></label>
              {errors.userId && <p>{errors.userId.message}</p>}
              <label><input  id ={'title'} type={"text"} placeholder={'title'} {...register('title')}/></label>
              {errors.title && <p>{errors.title.message}</p>}
              <label><input  id={'body'} type={"text"} placeholder={'body'} {...register('body')}/>
                  {errors.body && <p>{errors.body.message}</p>}</label>
              <button>save</button>
             {post && <p>User Id - {post.userId} <br/> Title - {post.title} <br/> Body - {post.body}</p>}
          </form>
      </>
  );
}

export default App;
