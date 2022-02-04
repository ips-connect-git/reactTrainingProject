import produce from 'immer';
import {
  CREATED_POST,
  UPDATED_POST,
  DELETED_POST,
  LOAD_POST_SUCCESS,
  LOAD_POST_ERROR,
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS_ERROR,
  CLEAR_MESSAGE,
  START_LOADING,
  STOP_LOADING,
} from './constants';

export const initialState = {
  loading: false,
  post: {},
  posts: [],
  message: '',
};

/* eslint-disable default-case, no-param-reassign */
const apiDemoPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CREATED_POST: {
        const posts = Object.assign([], draft.posts);
        let message = 'Post created successfully';

        // This is weird, the fake service always returns id = 101 for new posts
        // Remove the true condition logic for real service and just leave posts.push(action.post);
        const post101Exists = posts.filter(post => post.id === 101);

        if (post101Exists.length > 0) {
          message = 'Sorry, no more new posts are allow to be created.';
        } else {
          posts.unshift(action.post);
        }

        draft.posts = posts;
        draft.message = message;
        draft.loading = false;
        break;
      }
      case UPDATED_POST: {
        const posts = Object.assign([], draft.posts);
        const postToUpdate = posts.filter(
          post => post.id === action.post.id,
        )[0];
        posts[posts.indexOf(postToUpdate)] = action.post;

        draft.posts = posts;
        draft.message = 'Post updated successfully';
        draft.loading = false;
        break;
      }
      case DELETED_POST: {
        const posts = Object.assign([], draft.posts);
        const postToDelete = posts.filter(post => post.id === action.postId)[0];

        posts.splice(posts.indexOf(postToDelete), 1);

        draft.posts = posts;
        draft.message = 'Post deleted successfully';
        draft.loading = false;
        break;
      }
      case LOAD_POST_SUCCESS: {
        draft.loading = false;
        draft.post = action.post;
        break;
      }
      case LOAD_POST_ERROR: {
        draft.loading = false;
        draft.message = action.error;
        break;
      }
      case LOAD_POSTS_SUCCESS: {
        draft.loading = false;
        draft.posts = action.posts;
        break;
      }
      case LOAD_POSTS_ERROR: {
        draft.loading = false;
        draft.message = action.error;
        break;
      }
      case CLEAR_MESSAGE: {
        draft.message = '';
        break;
      }
      case START_LOADING: {
        draft.loading = true;
        break;
      }
      case STOP_LOADING: {
        draft.loading = false;
        break;
      }
    }
  });

export default apiDemoPageReducer;
