import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import layoutStyles from 'containers/Layout/styles';
import Transition from 'components/Transition';
import styles from './styles';

class PageBase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: this.props.loading,
    };
  }

  static getDerivedStateFromProps(nextProps, prevProps) {
    if (nextProps.loading !== prevProps.loading) {
      return {
        loading: nextProps.loading,
      };
    }
    return null;
  }

  render() {
    const { loading } = this.state;
    const {
      classes,
      children,
      minHeight,
      navigation,
      showLoadingText,
      title,
      wrapContent,
    } = this.props;

    const content = (
      <div style={{ minHeight: minHeight || 500, height: '100%' }}>
        {loading && (
          <div>
            <div className={classes.loading}>
              <LinearProgress
                color="secondary"
                className={classes.loadingIndicator}
              />
            </div>
            {showLoadingText && (
              <div className={classes.loadingText}>loading...</div>
            )}
          </div>
        )}
        <Transition animate>{children}</Transition>
      </div>
    );

    return (
      <div>
        <Grid
          container
          direction="row"
          alignItems="center"
          spacing={3}
          className={classes.container}
        >
          <Grid item>
            <Typography variant="h6" className={classes.title}>
              {title}
            </Typography>
          </Grid>
          {navigation && (
            <Grid item className={classes.navigationContainer}>
              <span className={classes.navigationText}>{navigation}</span>
            </Grid>
          )}
        </Grid>

        {wrapContent ? (
          <Paper className={classes.paper} square>
            {content}
          </Paper>
        ) : (
          <div>{content}</div>
        )}
      </div>
    );
  }
}

PageBase.propTypes = {
  children: PropTypes.any,
  classes: PropTypes.object.isRequired,
  loading: PropTypes.bool,
  minHeight: PropTypes.number,
  navigation: PropTypes.string,
  showLoadingText: PropTypes.bool,
  title: PropTypes.string,
  wrapContent: PropTypes.bool,
};

export default withStyles(
  theme => ({
    ...layoutStyles(theme),
    ...styles(theme),
  }),
  {
    withTheme: true,
  },
)(PageBase);
