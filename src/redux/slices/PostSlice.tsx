import {AxiosError} from "axios";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {IPostModel} from "../../models/IPostModel";
import {postService} from "../../services/postService";
import {ICommentModel} from "../../models/ICommentModel";

type PostSliceType = {
    posts: IPostModel[],
    post: IPostModel | null,
    isLoaded: boolean,
    error: string | null,
    comments: ICommentModel[]
}
const postInitialState: PostSliceType = {
    posts: [],
    post: null,
    isLoaded: false,
    error: null,
    comments: []
}
const loadPosts = createAsyncThunk(
    'postSlice/loadPosts',
    async (_, thunkAPI) => {
        try {
            const response = await postService.getAll();
            thunkAPI.dispatch(postActions.changeIsLoaded(true));
            return thunkAPI.fulfillWithValue(response.data);
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data)
        }
    }
)
const loadById = createAsyncThunk(
    'postSlice/loadById',
    async (id:number, thunkAPI)=>{
        try{
            const response = await postService.getById(id.toString());
            thunkAPI.dispatch(postActions.changeIsLoaded(true));
            return thunkAPI.fulfillWithValue(response.data);
        } catch (e){
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data)
        }
    }
)
const loadComments = createAsyncThunk(
    'postSlice/loadComments',
    async (id:number, thunkAPI)=>{
        try {
            const response  = await postService.getComments(id.toString());
            thunkAPI.dispatch(postActions.changeIsLoaded(true));
            return thunkAPI.fulfillWithValue(response.data);
        }catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data)
        }
    }
)

export const postSlice = createSlice({
    name: 'postSlice',
    initialState: postInitialState,
    reducers: {
        changeIsLoaded: (state, action) => {
            state.isLoaded = action.payload
        }
    },
    extraReducers: builder => {
        builder
            .addCase(loadPosts.fulfilled, (state, action) => {
                state.posts = action.payload;
                state.isLoaded = true
            })
            .addCase(loadPosts.pending, (state, action)=>{
                state.error = null
            })
            .addCase(loadPosts.rejected, (state, action)=>{
                state.error = action.payload as string;
                state.isLoaded = false
            }).addCase(loadById.fulfilled, (state, action) => {
                state.post = action.payload;
                state.isLoaded = true
            })
            .addCase(loadById.pending, (state, action)=>{
                state.error = null
            })
            .addCase(loadById.rejected, (state, action)=>{
                state.error = action.payload as string;
                state.isLoaded = false
            }).addCase(loadComments.fulfilled, (state, action) => {
                state.comments = action.payload;
                state.isLoaded = true
            })
            .addCase(loadComments.pending, (state, action)=>{
                state.error = null
            })
            .addCase(loadComments.rejected, (state, action)=>{
                state.error = action.payload as string;
                state.isLoaded = false
            })

    }

})
export const postActions = {
    ...postSlice.actions,
    loadPosts,
    loadById,
    loadComments
};