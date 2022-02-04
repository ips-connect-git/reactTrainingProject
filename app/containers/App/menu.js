import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Icon from '@material-ui/core/Icon';

// Components
import DashboardPage from 'containers/Pages/DashboardPage/Loadable';
import ApiDemoPage from 'containers/Pages/ApiDemoPage/Loadable';
import DynamicRoutesDemoPage from 'containers/Pages/DynamicRoutesDemoPage/Loadable';
import ViewPostPage from 'containers/Pages/DynamicRoutesDemoPage/ViewPostPage/Loadable';
import GridSystemPage from 'containers/Pages/GridSystemPage/Loadable';
import IconsPage from 'containers/Pages/IconsPage/Loadable';
import BadgesPage from 'containers/Pages/UIElementsPage/BadgesPage/Loadable';
import ButtonsPage from 'containers/Pages/UIElementsPage/ButtonsPage/Loadable';
import PickersPage from 'containers/Pages/UIElementsPage/PickersPage/Loadable';
import SelectsPage from 'containers/Pages/UIElementsPage/SelectsPage/Loadable';
import SelectionControlsPage from 'containers/Pages/UIElementsPage/SelectionControlsPage/Loadable';
import TextFieldsPage from 'containers/Pages/UIElementsPage/TextFieldsPage/Loadable';
import MaterialUITable from 'containers/Pages/Tables/MaterialUITable/Loadable';
import ReactTableDemo from 'containers/Pages/Tables/ReactTable/Loadable';
import BarChartPage from 'containers/Pages/ChartsPage/BarChartPage/Loadable';
import AreaChartPage from 'containers/Pages/ChartsPage/AreaChartPage/Loadable';
import LineChartPage from 'containers/Pages/ChartsPage/LineChartPage/Loadable';
import WysiwygPage from 'containers/Pages/WysiwygPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

// Icons
import ReactBoilerplateIcon from 'images/react-boilerplate.png';
import MaterialIcon from 'images/material-ui-icon.png';
import ReactTableIcon from 'images/react-table-logo.png';

// Menu tree
const Menu = [
  {
    id: 'dashboard',
    text: 'DashBoard',
    icon: <Icon>assessment</Icon>,
    url: '/',
    component: DashboardPage,
  },
  {
    id: 'api-demo-page',
    text: 'API Demo',
    icon: <Icon>http</Icon>,
    url: '/api-demo',
    component: ApiDemoPage,
  },
  {
    id: 'wysiwyg',
    text: 'React Draft Wysiwyg',
    icon: <Icon>format_color_text</Icon>,
    url: '/wysiwyg',
    component: WysiwygPage,
  },
  {
    id: 'dynamic-routes',
    text: 'Dynamic Routes',
    icon: <Icon>space_bar</Icon>,
    isDynamic: true, // Dynamic menu children won't be shown in the sidebar menu, they will be visible for openviews and tabs only
    children: [
      {
        id: 'posts',
        text: 'All Posts',
        url: '/posts',
        component: DynamicRoutesDemoPage,
      },
      {
        id: 'post-:id', // child template
        text: 'Post :id',
        url: '/posts/:id',
        component: ViewPostPage,
      },
    ],
  },
  {
    id: 'ui-elements',
    text: 'UI Elements',
    icon: <Icon>web</Icon>,
    children: [
      {
        id: 'badges',
        text: 'Badges',
        url: '/ui-elements/badges',
        component: BadgesPage,
      },
      {
        id: 'buttons',
        text: 'Buttons',
        url: '/ui-elements/buttons',
        component: ButtonsPage,
      },
      {
        id: 'pickers',
        text: 'Pickers',
        url: '/ui-elements/pickers',
        component: PickersPage,
      },
      {
        id: 'selection-controls',
        text: 'Selection Controls',
        url: '/ui-elements/selection-controls',
        component: SelectionControlsPage,
      },
      {
        id: 'selects',
        text: 'Selects',
        url: '/ui-elements/selects',
        component: SelectsPage,
      },
      {
        id: 'text-fields',
        text: 'Text Fields',
        url: '/ui-elements/text-fields',
        component: TextFieldsPage,
      },
      {
        id: 'see-more-material-ui-demos',
        text: 'See more at Material-UI',
        url: 'https://material-ui.com/demos/app-bar/',
        component: NotFoundPage,
        isExternalUrl: true,
      },
    ],
  },
  {
    id: 'grid-system',
    text: 'Grid System',
    icon: <Icon>line_style</Icon>,
    url: '/grid-system',
    component: GridSystemPage,
  },
  {
    id: 'icons',
    text: 'Icons',
    icon: <Icon>adjust</Icon>,
    url: '/icons',
    component: IconsPage,
  },
  {
    id: 'tables',
    text: 'Tables',
    icon: <Icon>grid_on</Icon>,
    children: [
      {
        id: 'react-table-demo',
        text: 'React Table',
        url: '/react-table',
        component: ReactTableDemo,
      },
      {
        id: 'material-ui-table',
        text: 'Material-UI Table',
        url: '/material-ui-table',
        component: MaterialUITable,
      },
    ],
  },
  {
    id: 'charts',
    text: 'Charts',
    icon: <Icon>show_chart</Icon>,
    children: [
      {
        id: 'bar-charts',
        text: 'Bar Charts',
        url: '/charts/bar-charts',
        component: BarChartPage,
      },
      {
        id: 'area-charts',
        text: 'Area Charts',
        url: '/charts/area-charts',
        component: AreaChartPage,
      },
      {
        id: 'line-charts',
        text: 'Line Charts',
        url: '/charts/line-charts',
        component: LineChartPage,
      },
    ],
  },
  {
    id: 'documentation',
    text: 'Documentation',
    icon: <Icon>chrome_reader_mode</Icon>,
    children: [
      {
        id: 'react-boilerplate',
        text: 'React Boilerplate',
        icon: (
          <img
            style={{ width: 20, height: 20 }}
            alt="React Boilerplate"
            src={ReactBoilerplateIcon}
          />
        ),
        url:
          'https://github.com/react-boilerplate/react-boilerplate/tree/v4.0.0',
        component: NotFoundPage,
        isExternalUrl: true,
      },
      {
        id: 'material-ui',
        text: 'Material-UI',
        icon: (
          <img
            style={{ width: 20, height: 20 }}
            alt="Material-UI"
            src={MaterialIcon}
          />
        ),
        url: 'https://material-ui.com/demos/app-bar',
        component: NotFoundPage,
        isExternalUrl: true,
      },
      {
        id: 'react-table',
        text: 'React Table',
        icon: (
          <img
            style={{ width: 20, height: 20 }}
            alt="React-Table"
            src={ReactTableIcon}
          />
        ),
        url: 'https://react-table.js.org/#/story/simple-table',
        component: NotFoundPage,
        isExternalUrl: true,
      },
      {
        id: 'recharts',
        text: 'Recharts',
        icon: <Icon>code</Icon>,
        url: 'http://recharts.org',
        component: NotFoundPage,
        isExternalUrl: true,
      },
      {
        id: 'react-draft-wysiwyg',
        text: 'React Draft Wysiwyg',
        icon: <Icon>code</Icon>,
        url: 'https://jpuri.github.io/react-draft-wysiwyg/#/',
        component: NotFoundPage,
        isExternalUrl: true,
      },
    ],
  },
];

// Asign index and parent fields for each item, which is needed for header tabs navigation
let index = 0;

Menu.map(item => {
  const menuItem = item;
  menuItem.index = index;
  index += 1;
  if (menuItem.children) {
    menuItem.children.map(child => {
      const childItem = child;

      childItem.index = index;
      childItem.parent = {
        id: childItem.id,
        parentId: menuItem.id,
        parentText: menuItem.text,
      };
      index += 1;

      return child;
    });
  }
  return item;
});

// Routes
const getRoute = item => (
  <Route key={item.id} exact path={item.url} component={item.component} />
);

const Routes = (location, dynamicMenu) => {
  const menu = dynamicMenu || Menu;
  return (
    <Switch key={location.key} location={location}>
      {menu.map(item =>
        !item.children
          ? getRoute(item)
          : item.children.map(child => getRoute(child)),
      )}
      <Route component={NotFoundPage} />
    </Switch>
  );
};

export { Menu, Routes };
