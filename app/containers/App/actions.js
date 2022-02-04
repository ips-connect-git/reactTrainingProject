import {
  SIGN_IN,
  SIGN_OUT,
  REGISTER,
  RESET_PASSWORD,
  CLEAR_AUTHENTICATION_MESSAGE,
  OPEN_VIEW,
  OPEN_DYNAMIC_VIEW,
  CLOSE_VIEW,
  SELECT_MENU_ITEM,
  OPEN_SETTING_DRAWER,
  CLOSE_SETTING_DRAWER,
  CHANGE_THEME,
  SHOW_HIDE_OPEN_VIEWS,
  SHOW_HIDE_HEADER_TABS,
  SHOW_SEARCH,
} from './constants';

export function signIn(payload) {
  return {
    type: SIGN_IN,
    payload,
  };
}

export function signOut() {
  return {
    type: SIGN_OUT,
  };
}

export function register(payload) {
  return {
    type: REGISTER,
    payload,
  };
}

export function resetPassword(payload) {
  return {
    type: RESET_PASSWORD,
    payload,
  };
}

export function clearAuthenticationMessage() {
  return {
    type: CLEAR_AUTHENTICATION_MESSAGE,
  };
}

export function openView(menuItem, icon, openViews) {
  return {
    type: OPEN_VIEW,
    menuItem,
    icon,
    openViews,
  };
}

export function openDynamicView(dynamicItem, parentItem, openViews) {
  return {
    type: OPEN_DYNAMIC_VIEW,
    dynamicItem,
    parentItem,
    openViews,
  };
}

export function selectMenuItem(foundMenuItem, foundOpenViewItem, openViews) {
  return {
    type: SELECT_MENU_ITEM,
    foundMenuItem,
    foundOpenViewItem,
    openViews,
  };
}

export function closeView(foundMenuItem, foundOpenViewItem, idsToBeRemoved) {
  return {
    type: CLOSE_VIEW,
    foundMenuItem,
    foundOpenViewItem,
    idsToBeRemoved,
  };
}

export function openSettingsDrawer() {
  return {
    type: OPEN_SETTING_DRAWER,
  };
}

export function closeSettingsDrawer() {
  return {
    type: CLOSE_SETTING_DRAWER,
  };
}

export function changeTheme(theme) {
  return {
    type: CHANGE_THEME,
    theme,
  };
}

export function showHideOpenViews(showHide) {
  return {
    type: SHOW_HIDE_OPEN_VIEWS,
    showHide,
  };
}

export function showHideHeaderTabs(showHide) {
  return {
    type: SHOW_HIDE_HEADER_TABS,
    showHide,
  };
}

export function showHideSearch(value) {
  return {
    type: SHOW_SEARCH,
    value,
  };
}
