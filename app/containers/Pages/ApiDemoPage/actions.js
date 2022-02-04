import {
  GET_POST,
  LOAD_POST_SUCCESS,
  LOAD_POST_ERROR,
  GET_POSTS,
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS_ERROR,
  CREATE_POST,
  CREATED_POST,
  UPDATE_POST,
  UPDATED_POST,
  DELETE_POST,
  DELETED_POST,
  CLEAR_MESSAGE,
  START_LOADING,
  STOP_LOADING,
} from './constants';

export function createPost(post) {
  return {
    type: CREATE_POST,
    post,
  };
}

export function createdPost(post) {
  return {
    type: CREATED_POST,
    post,
  };
}

export function updatePost(post) {
  return {
    type: UPDATE_POST,
    post,
  };
}

export function updatedPost(post) {
  return {
    type: UPDATED_POST,
    post,
  };
}

export function deletePost(post) {
  return {
    type: DELETE_POST,
    post,
  };
}

export function deletedPost(postId) {
  return {
    type: DELETED_POST,
    postId,
  };
}

export function getPosts() {
  return {
    type: GET_POSTS,
  };
}

export function postsLoaded(posts) {
  return {
    type: LOAD_POSTS_SUCCESS,
    posts,
  };
}

export function postsLoadingError(error) {
  return {
    type: LOAD_POSTS_ERROR,
    error,
  };
}

export function getPost(id) {
  return {
    type: GET_POST,
    id,
  };
}

export function postLoaded(post) {
  return {
    type: LOAD_POST_SUCCESS,
    post,
  };
}

export function postLoadingError(error) {
  return {
    type: LOAD_POST_ERROR,
    error,
  };
}

export function clearMessage() {
  return {
    type: CLEAR_MESSAGE,
  };
}

export function startLoading() {
  return {
    type: START_LOADING,
  };
}

export function stopLoading() {
  return {
    type: STOP_LOADING,
  };
}
