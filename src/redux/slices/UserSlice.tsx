import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IUserModel} from "../../models/IUserModels/IUserModel";
import {userService} from "../../services/userService";
import {IPostModel} from "../../models/IPostModel";

type UserSliceType = {
    users: IUserModel[],
    user: IUserModel | null,
    isLoaded: boolean,
    error: string | null,
    userPosts: IPostModel[]
}
const userInitialState: UserSliceType = {
    users: [],
    user: null,
    isLoaded:false,
    error: null,
    userPosts:[]
}
const loadUsers = createAsyncThunk(
    'userSlice/loadUsers',
    async (_, thunkAPI) => {
        try {
            const response = await userService.getAll();
            thunkAPI.dispatch(userActions.changeIsLoaded(true));
            return thunkAPI.fulfillWithValue(response.data);
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data)
        }
    }
)
const loadUserById = createAsyncThunk(
    'userSlice/loadUserById',
    async (id:number, thunkAPI)=>{
        try {
            const response = await userService.getById(id.toString());
            thunkAPI.dispatch(userActions.changeIsLoaded(true));
            return thunkAPI.fulfillWithValue(response.data);
        } catch (e){
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data )
        }
    }
)
const loadPosts = createAsyncThunk(
    'userSlice/loadPosts',
    async (id:number, thunkAPI)=>{
        try{
            const response  = await userService.getPosts(id.toString());
            thunkAPI.dispatch(userActions.changeIsLoaded(true));
            return thunkAPI.fulfillWithValue(response.data);
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
)
export const userSlice = createSlice({
    name: 'userSlice',
    initialState: userInitialState,
    reducers: {
        changeIsLoaded:(state, action:PayloadAction<boolean>)=>{
            state.isLoaded=action.payload;
        }
    },
    extraReducers: builder => builder
        .addCase(loadUsers.fulfilled, (state, action) => {
            state.users = action.payload;
            state.error = null;
        })
        .addCase(loadUsers.rejected, (state, action) => {
                state.error = action.payload as string;
        })
        .addCase(loadUsers.pending, state => {
            state.error=null;
        })
        .addCase(loadUserById.fulfilled, (state, action)=>{
            state.user = action.payload
        })
        .addCase(loadUserById.rejected, (state, action)=>{
            state.error = action.payload as string
        })
        .addCase(loadUserById.pending, (state, action)=>{
            state.error=null;
        }).addCase(loadPosts.fulfilled, (state, action)=>{
            state.userPosts = action.payload
        })
        .addCase(loadPosts.rejected, (state, action)=>{
            state.error = action.payload as string
        })
        .addCase(loadPosts.pending, (state, action)=>{
            state.error=null;
        })
})
export const userActions = {
    ...userSlice.actions,
    loadUsers,
    loadUserById,
    loadPosts
};