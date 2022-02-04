import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }

  #app {
    background-color: #f2f3f8;
    min-height: 100%;
    min-width: 100%;
  }

  .app-frame {
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
  }

  p,
  label {
    line-height: 1.5em;
  }

  /* app wrapper */
  #app-wrapper {
    margin: 0;
    display: flex;
    min-height: 100%;
    flex-direction: column;
  }

  /* header appbar */

  header .tabs button:hover i {
    visibility: visible !important;
  }

  /* header primary appbar */
  .primary-appbar {
    height: 56px;
    margin-top: -8px;
  }

  /* header secondary appbar */

  .secondary-appbar {
    margin-top: 48px;
    min-height: 48px;
  }

  .secondary-appbar .empty-icon {
    width: 50px;
  }

  /* sidebar left */
  #sidebar-menu > div,
  #sidebar-menu-mobile > div {
    overflow-y: hidden !important;
    position: fixed !important;
  }

  .open-views-list ul,
  .menu-list ul {
    overflow-y: hidden !important;
  }

  .open-views-list ul:hover,
  .menu-list ul:hover {
    overflow-y: auto !important;
  }

  .open-views-list {
    margin-top: 1px;
  }

  .menu-list {
    margin-top: -7px;
  }

  #sidebar-menu ul,
  #sidebar-menu-mobile ul {
    overflow-y: auto;
  }

  /* main container */
  main.main-container {
    background-color: #f2f3f8;
  }

  main.main-container-sidebar-closed {
    margin-left: 60px;
  }

  main.main-container-sidebar-opened {
    margin-left: 240px;
  }

  @media screen and (max-width: 959px) {
    main.main-container-sidebar-opened,
    main.main-container-sidebar-closed {
      margin-left: 0px;
    }
  }

  .main-container.subtabs {
    height: calc(100% - 112px);
  }

  .primary-appbar.no-box-shadow {
    box-shadow: none;
  }

  .secondary-appbar > div {
    min-height: 48px;
  }

  @media (max-width: 600px) {
    .main-container {
      margin-top: 44px !important;
    }
    .main-container.subtabs {
      height: calc(100% - 128px);
      margin-top: 95px !important;
    }
    .primary-appbar {
      height: 52px;
    }
    .secondary-appbar {
      margin-top: 44px;
    }
    .settings-button, .secondary-appbar .empty-icon {
      display: none !important;
    }
    .open-views-list ul,
    .menu-list ul {
      overflow-y: auto !important;
    }
  }

  @media (min-width: 600px) {
    .main-container.subtabs {
      height: calc(100% - 128px);
      margin-top: 95px;
    }
  }

  /* sidebar items */
  .truncate-list-item-text {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .truncate-list-item-text h3 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .open-views-list li:hover i {
    visibility: visible !important;
  }

  /* scrollbars style */
  body::-webkit-scrollbar, *::-webkit-scrollbar {
    width: 0.5em;
    height: 0.5em;
  }

  body::-webkit-scrollbar-track, *::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0);
  }

  body::-webkit-scrollbar-thumb, *::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
  }

  body::-webkit-scrollbar {
      width: 1em;
  }

  /* LeftSidebar */
  .left-sidebar-close {
    cursor: default;
  }

  /* header tabs */
  .tabs .close-tab .material-icons {
    position: absolute;
    right: 0px;
    top: 0px;
    visibility: hidden;
    cursor: default;
  }

  .tabs .close-tab:hover span  {
    visibility: visible;
  }

  .tabs .close-tab {
    min-height: 48px !important
  }

  /* CSSTransition */
  .fade-appear {
    opacity: 0.01;
  }
  .fade-appear-active {
    opacity: 1;
    transition: opacity .5s ease-in;
  }

  /* recharts */
  .recharts-wrapper, .ReactTable {
    font-size: 14px;
  }
`;

export default GlobalStyle;
