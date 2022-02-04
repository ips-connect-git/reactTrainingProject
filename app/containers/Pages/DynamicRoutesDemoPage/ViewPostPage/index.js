import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import classNames from 'classnames';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import layoutStyles from 'containers/Layout/styles';
import 'react-table/react-table.css';
import PageBase from 'components/PageBase';
import reducer from 'containers/Pages/ApiDemoPage/reducer';
import saga from 'containers/Pages/ApiDemoPage/saga';
import {
  makeSelectPost,
  makeSelectLoading,
} from 'containers/Pages/ApiDemoPage/selectors';
import { makeSelectLocation } from 'containers/App/selectors';
import { getPost } from 'containers/Pages/ApiDemoPage/actions';
import styles from './styles';

export class ViewPostPage extends React.PureComponent {
  componentDidMount() {
    const { location } = this.props;
    const pathnameArr = location.pathname.split('/');

    if (pathnameArr.length === 3) {
      const id = pathnameArr[2];
      // Get post
      this.props.dispatch(getPost(id));
    }
  }

  render() {
    const { post, loading, classes } = this.props;
    const { id, title } = post;
    const page = id ? parseInt((id - 1) / 10, 10) : 0;

    return (
      <PageBase
        title={`Title: ${(!loading && title) || '...'}`}
        navigation={`Application / Posts / Post ${(!loading && id) || '...'}`}
        minHeight={180}
        wrapContent
        loading={loading}
        showLoadingText
      >
        <Grid container justify="flex-end" alignItems="center" direction="row">
          <Link
            className={classNames(classes.link, classes.gotoPostsLink)}
            to={`/posts?page=${page}`}
          >
            Go back to Posts
          </Link>
        </Grid>
        {post && !loading ? (
          <Grid container justify="center" alignItems="center" direction="row">
            <Grid item>
              <img
                className={classes.image}
                src={`https://s3.amazonaws.com/fortressassets/images/posts/${
                  post.id > 100 || !post.id ? 'no-image' : post.id
                }.jpg`}
                alt={post.title}
              />
            </Grid>
            <Grid item xs={4} className={classes.bodyPadding}>
              <Typography variant="body2">{post.body}</Typography>
            </Grid>
          </Grid>
        ) : null}
      </PageBase>
    );
  }
}

ViewPostPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  location: PropTypes.any.isRequired,
  classes: PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch => ({
  dispatch,
});

const mapStateToProps = createStructuredSelector({
  post: makeSelectPost(),
  loading: makeSelectLoading(),
  location: makeSelectLocation(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'apiDemo', reducer });
const withSaga = injectSaga({ key: 'apiDemo', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  withStyles(
    theme => ({
      ...layoutStyles(theme),
      ...styles(theme),
    }),
    {
      withTheme: true,
    },
  ),
)(ViewPostPage);
