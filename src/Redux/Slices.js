import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import axios from "axios";

const initialState = { value: "" };

export const fetchAllPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (userId) => {
    console.log("userId got", userId);
    const posts = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
    console.log("posts got", posts);
    return posts.data;
  }
);
const userSlice = createSlice({
  name: "user",
  initialState: { value: "" },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = initialState.value;
    },
  },
});

const counterSlice = createSlice({
  name: "increment",
  initialState: { value: 0 },
  reducers: {
    increment: (state, action) => {
      state.value = state.value + 1;
    },
    decrement: (state, action) => {
      state.value = state.value - 1;
    },
  },
});

const postSlice = createSlice({
  name: "posts",
  initialState: { posts: [], loaded: false },
  reducers: {
    postLoaded: (state, action) => {
      state.loaded = action.payload;
    },
  },
  extraReducers: {
    [fetchAllPosts.pending]: () => {
      console.log("pending");
    },
    [fetchAllPosts.fulfilled]: (state, { payload }) => {
      console.log("fulfilled", payload);
      return { ...state, posts: payload };
    },
    [fetchAllPosts.rejected]: () => {
      console.log("rejected");
    },
  },
});

export const { login, logout } = userSlice.actions;

export const { increment, decrement } = counterSlice.actions;

export const rootReducers = combineReducers({
  user: userSlice.reducer,
  counter: counterSlice.reducer,
  posts: postSlice.reducer,
});
