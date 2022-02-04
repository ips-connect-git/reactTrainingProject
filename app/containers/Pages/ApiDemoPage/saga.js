/**
 * Gets posts from https://jsonplaceholder.typicode.com/
 */

import { call, put, takeLatest, all } from 'redux-saga/effects';
import request from 'utils/request';
import {
  GET_POSTS,
  GET_POST,
  CREATE_POST,
  UPDATE_POST,
  DELETE_POST,
} from './constants';
import {
  postLoaded,
  postLoadingError,
  postsLoaded,
  postsLoadingError,
  createdPost,
  updatedPost,
  deletedPost,
  startLoading,
} from './actions';

const root = 'https://jsonplaceholder.typicode.com';

export function* createPost(action) {
  const requestURL = `${root}/posts`;

  try {
    // Call our request helper (see 'utils/request')
    yield put(startLoading());
    const result = yield call(request, requestURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(action.post),
    });

    yield put(createdPost(result));
  } catch (err) {
    yield put(postsLoadingError(err));
  }
}

export function* updatePost(action) {
  const requestURL = `${root}/posts/${action.post.id}`;

  try {
    // Call our request helper (see 'utils/request')
    yield put(startLoading());
    const result = yield call(request, requestURL, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(action.post),
    });
    yield put(updatedPost(result));
  } catch (err) {
    yield put(
      postsLoadingError('Cannot update this temp post, due to api limitation'),
    );
  }
}

export function* deletePost(action) {
  const requestURL = `${root}/posts/${action.post.id}`;

  try {
    // Call our request helper (see 'utils/request')
    yield put(startLoading());
    yield call(request, requestURL, {
      method: 'DELETE',
    });

    yield put(deletedPost(action.post.id));
  } catch (err) {
    yield put(postsLoadingError(err));
  }
}

export function* getPost(action) {
  const requestURL = `${root}/posts/${action.id}`;

  try {
    yield put(startLoading());
    const post = yield call(request, requestURL);
    yield put(postLoaded(post));
  } catch (err) {
    yield put(postLoadingError(err));
  }
}

export function* getOne() {
  yield takeLatest(GET_POST, getPost);
}

export function* getPosts() {
  const requestURL = `${root}/posts`;
  try {
    // Call our request helper (see 'utils/request')
    yield put(startLoading());
    const posts = yield call(request, requestURL);
    yield put(postsLoaded(posts));
  } catch (err) {
    yield put(postsLoadingError(err));
  }
}

export function* getData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(GET_POSTS, getPosts);
}

export function* postData() {
  yield takeLatest(CREATE_POST, createPost);
}

export function* putData() {
  yield takeLatest(UPDATE_POST, updatePost);
}

export function* deleteData() {
  yield takeLatest(DELETE_POST, deletePost);
}

export default function* sagas() {
  yield all([getData(), getOne(), postData(), putData(), deleteData()]);
}
