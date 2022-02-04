import React from 'react';
import PropTypes from 'prop-types';

import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import getPageContext from './getPageContext';

function withMaterialUI(Component) {
  class WithMaterialUI extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        currentTheme: props.currentTheme,
        pageContext: getPageContext(props.currentTheme),
      };
    }

    componentDidMount() {
      // Remove the server-side injected CSS.
      const jssStyles = document.querySelector('#jss-server-side');
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
    }

    static getDerivedStateFromProps(nextProps, prevProps) {
      if (nextProps.currentTheme !== prevProps.currentTheme) {
        return {
          currentTheme: nextProps.currentTheme,
          pageContext: getPageContext(nextProps.currentTheme, true),
        };
      }
      return null;
    }

    render() {
      return (
        <MuiThemeProvider theme={this.state.pageContext.theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...this.props} />
        </MuiThemeProvider>
      );
    }
  }

  WithMaterialUI.propTypes = {
    pageContext: PropTypes.object,
    currentTheme: PropTypes.string,
  };

  WithMaterialUI.getInitialProps = ctx => {
    if (Component.getInitialProps) {
      return Component.getInitialProps(ctx);
    }

    return {};
  };

  return WithMaterialUI;
}

export default withMaterialUI;
