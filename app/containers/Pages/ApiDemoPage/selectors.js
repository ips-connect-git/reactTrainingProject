/**
 * ApidemoPage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectApiDemo = state => state.apiDemo || initialState;

const makeSelectPosts = () =>
  createSelector(
    selectApiDemo,
    state => state.posts,
  );

const makeSelectPost = () =>
  createSelector(
    selectApiDemo,
    state => state.post,
  );

const makeSelectMessage = () =>
  createSelector(
    selectApiDemo,
    state => state.message,
  );

const makeSelectLoading = () =>
  createSelector(
    selectApiDemo,
    state => state.loading,
  );

export {
  selectApiDemo,
  makeSelectPosts,
  makeSelectPost,
  makeSelectMessage,
  makeSelectLoading,
};
