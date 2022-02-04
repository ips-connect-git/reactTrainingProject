import produce from 'immer';
import { findMenuItem, getNextIndex } from 'utils/menuHelper';
import { Menu } from './menu';
import {
  AUTHENTICATED,
  AUTHENTICATION_FAILED,
  REGISTRATION_FAILED,
  SIGN_OUT,
  CLEAR_AUTHENTICATION_MESSAGE,
  OPENED_VIEW,
  OPENED_DYNAMIC_VIEW,
  CLOSED_VIEW,
  SELECTED_MENU_ITEM,
  OPEN_SETTING_DRAWER,
  CLOSE_SETTING_DRAWER,
  CHANGE_THEME,
  SHOW_HIDE_OPEN_VIEWS,
  SHOW_HIDE_HEADER_TABS,
  SHOW_SEARCH,
} from './constants';

const selectedMenuItem = Menu[0];
const openedViews = [];
openedViews.push(selectedMenuItem);

// The initial state of the App
export const initialState = {
  user: {
    name: 'John Smith',
    email: 'demo@test.com',
  },
  userIsAuthenticated: true,
  authenticationErrorMessage: '',
  registrationErrorMessage: '',
  menu: Menu,
  selectedMenuItem,
  openViews: openedViews,
  selectedOpenedMenuItem: selectedMenuItem,
  currentTheme: 'default', // atom, aurelia, quiet, sky, default
  showOpenViews: false,
  showHeaderTabs: true,
  showSearch: false,
  openSettingDrawer: false,
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      // Authentication process
      case AUTHENTICATED: {
        draft.userIsAuthenticated = true;
        draft.user = action.user;
        draft.authenticationErrorMessage = '';
        break;
      }
      case AUTHENTICATION_FAILED: {
        draft.authenticationErrorMessage = action.message;
        break;
      }
      case CLEAR_AUTHENTICATION_MESSAGE: {
        draft.authenticationErrorMessage = '';
        break;
      }
      case REGISTRATION_FAILED: {
        draft.registrationErrorMessage = action.message;
        break;
      }
      case SIGN_OUT: {
        draft.userIsAuthenticated = false;
        draft.user = {};
        draft.authenticationErrorMessage = '';
        break;
      }
      // End of Authentication process
      case OPENED_VIEW: {
        const { menuItem, icon } = action;
        const openViews = Object.assign([], draft.openViews);
        const openView = Object.assign({}, menuItem);

        openView.icon = icon;
        openViews.push(openView);

        draft.openViews = openViews;
        break;
      }
      case OPENED_DYNAMIC_VIEW: {
        const { dynamicItem, parentItem } = action;
        const menu = Object.assign([], draft.menu);
        const openViews = Object.assign([], draft.openViews);
        const { foundMenuItem } = findMenuItem(menu, 'id', parentItem.id);
        const firstChild = parentItem.children[0];

        dynamicItem.index = getNextIndex(menu);
        foundMenuItem.children.push(dynamicItem);

        const firstChildInOpenViews = openViews.find(
          item => item.id === firstChild.id,
        );
        const openView = Object.assign({}, dynamicItem);
        openView.icon = parentItem.icon;

        if (!firstChildInOpenViews) {
          openViews.push(firstChild);
        }

        openViews.push(openView);

        draft.openViews = openViews;
        break;
      }
      case CLOSED_VIEW: {
        const { idsToBeRemoved } = action;
        const openViews = Object.assign([], draft.openViews);

        idsToBeRemoved.forEach(id => {
          const itemToBeRemoved = openViews.find(item => item.id === id);
          const index = openViews.indexOf(itemToBeRemoved);
          openViews.splice(index, 1);
        });

        draft.openViews = openViews;
        break;
      }
      case SELECTED_MENU_ITEM: {
        draft.selectedMenuItem = action.foundMenuItem;
        draft.selectedOpenedMenuItem = action.foundOpenViewItem;
        break;
      }
      case OPEN_SETTING_DRAWER: {
        draft.openSettingDrawer = true;
        break;
      }
      case CLOSE_SETTING_DRAWER: {
        draft.openSettingDrawer = false;
        break;
      }
      case CHANGE_THEME: {
        draft.currentTheme = action.theme;
        break;
      }
      case SHOW_HIDE_OPEN_VIEWS: {
        draft.showOpenViews = action.showHide;
        break;
      }
      case SHOW_HIDE_HEADER_TABS: {
        draft.showHeaderTabs = action.showHide;
        break;
      }
      case SHOW_SEARCH: {
        const { value } = action;
        draft.showSearch = value;
        break;
      }
    }
  });

export default appReducer;
