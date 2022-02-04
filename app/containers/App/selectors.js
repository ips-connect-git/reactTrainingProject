import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = state => state.global || initialState;
const selectRouter = state => state.router;

// Auth
const makeSelectUserIsAuthenticated = () =>
  createSelector(
    selectGlobal,
    state => state.userIsAuthenticated,
  );
const makeSelectAuthenticationErrorMessage = () =>
  createSelector(
    selectGlobal,
    state => state.authenticationErrorMessage,
  );

// Menu
const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );

const makeSelectMenu = () =>
  createSelector(
    selectGlobal,
    state => state.menu,
  );
const makeSelectSelectedMenuItem = () =>
  createSelector(
    selectGlobal,
    state => state.selectedMenuItem,
  );

const makeSelectOpenViews = () =>
  createSelector(
    selectGlobal,
    state => state.openViews,
  );
const makeSelectSelectedOpenedMenuItem = () =>
  createSelector(
    selectGlobal,
    state => state.selectedOpenedMenuItem,
  );

// Settings
const makeSelectCurrentTheme = () =>
  createSelector(
    selectGlobal,
    state => state.currentTheme,
  );
const makeSelectOpenSettingDrawer = () =>
  createSelector(
    selectGlobal,
    state => state.openSettingDrawer,
  );
const makeSelectShowOpenView = () =>
  createSelector(
    selectGlobal,
    state => state.showOpenViews,
  );
const makeSelectShowHeaderTabs = () =>
  createSelector(
    selectGlobal,
    state => state.showHeaderTabs,
  );
const makeSelectShowSearch = () =>
  createSelector(
    selectGlobal,
    state => state.showSearch,
  );

export {
  makeSelectUserIsAuthenticated,
  makeSelectAuthenticationErrorMessage,
  makeSelectLocation,
  makeSelectMenu,
  makeSelectSelectedMenuItem,
  makeSelectOpenViews,
  makeSelectSelectedOpenedMenuItem,
  makeSelectCurrentTheme,
  makeSelectOpenSettingDrawer,
  makeSelectShowOpenView,
  makeSelectShowHeaderTabs,
  makeSelectShowSearch,
};
