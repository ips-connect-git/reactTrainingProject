import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Snackbar from '@material-ui/core/Snackbar';

import AddButton from 'components/Pages/ApiDemo/addButton';
import AddEditDialog from 'components/Pages/ApiDemo/addEditDialog';
import Cards from 'components/Pages/ApiDemo/cards';
import DeleteDialog from 'components/Pages/ApiDemo/deleteDialog';
import InfiniteScroll from 'react-infinite-scroller';
import Instructions from 'components/Pages/ApiDemo/instructions';
import layoutStyles from 'containers/Layout/styles';
import LinkToInfinityScroll from 'components/Credits/InfinityScroll/linkToInfinityScroll';
import NotificationBox from 'components/NotificationBox';
import PageBase from 'components/PageBase';

import reducer from './reducer';
import saga from './saga';
import {
  makeSelectPosts,
  makeSelectMessage,
  makeSelectLoading,
} from './selectors';
import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  clearMessage,
} from './actions';
import styles from './styles';

export class ApiDemoPage extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      openDeleteDialog: false,
      openAddEditDialog: false,
      addOrEditText: 'Add',
      selectedPost: null,
      showSnackbar: false,
      snackbarMessage: '',
      currentPage: 0,
      postsByPage: [],
      message: props.message,
      posts: props.posts,
    };
  }

  componentDidMount() {
    // Get all posts
    this.props.dispatch(getPosts());
  }

  static getDerivedStateFromProps(nextProps, prevProps) {
    if (nextProps.message !== prevProps.message) {
      return {
        message: nextProps.message,
        showSnackbar: true,
        snackbarMessage: nextProps.message,
      };
    }
    if (nextProps.posts !== prevProps.posts) {
      const { currentPage } = nextProps;
      return {
        posts: nextProps.posts,
        postsByPage: nextProps.posts.slice(0, currentPage * 10),
      };
    }
    return null;
  }

  getPostsWithExpandedAttribute = posts => {
    const newPosts = posts.map(post => {
      const newPost = post;
      newPost.expanded = false;
      return newPost;
    });

    return newPosts;
  };

  addEditPost = () => {
    const { selectedPost } = this.state;
    const { dispatch } = this.props;

    if (this.state.addOrEditText === 'Add') {
      dispatch(createPost(selectedPost));
    } else {
      dispatch(updatePost(selectedPost));
    }

    this.setState({
      openAddEditDialog: false,
      selectedPost: null,
    });
  };

  deletePost = () => {
    const { selectedPost } = this.state;
    const { dispatch } = this.props;

    this.setState({
      openDeleteDialog: false,
      selectedPost: null,
    });

    dispatch(deletePost(selectedPost));
  };

  selectPostToBeAdded = () => {
    this.setState({
      addOrEditText: 'Add',
      openAddEditDialog: true,
      selectedPost: {
        userId: 1, // Default user
        title: '',
        body: '',
      },
    });
  };

  selectPostToBeEdited = post => {
    this.setState({
      addOrEditText: 'Edit',
      openAddEditDialog: true,
      selectedPost: post,
    });
  };

  selectPostToBeDeleted = post => {
    this.setState({
      openDeleteDialog: true,
      selectedPost: post,
    });
  };

  handleCloseAddEditDialog = () => {
    this.setState({
      openAddEditDialog: false,
      selectedPost: null,
    });
  };

  handleCloseDeleteDialog = () => {
    this.setState({
      openDeleteDialog: false,
      selectedPost: null,
    });
  };

  titleTextFieldChanged = input => {
    const title = input.target.value;
    const { selectedPost } = this.state;
    const selectedPostModified = Object.assign({}, selectedPost, { title });

    this.setState({
      selectedPost: selectedPostModified,
    });
  };

  bodyTextFieldChanged = input => {
    const body = input.target.value;
    const { selectedPost } = this.state;
    const selectedPostModified = Object.assign({}, selectedPost, { body });

    this.setState({
      selectedPost: selectedPostModified,
    });
  };

  handleSnackbarClose = () => {
    const { dispatch } = this.props;
    dispatch(clearMessage());

    this.setState({
      showSnackbar: false,
    });
  };

  loadMore = page => {
    const { posts } = this.props;
    this.setState({
      postsByPage: posts.slice(0, page * 10),
      currentPage: page,
    });
  };

  render() {
    const {
      addOrEditText,
      currentPage,
      openDeleteDialog,
      openAddEditDialog,
      selectedPost,
      showSnackbar,
      snackbarMessage,
      postsByPage,
    } = this.state;
    const { classes, posts, loading } = this.props;

    return (
      <PageBase
        title="API Demo"
        navigation="Application / API Demo"
        minHeight={180}
        loading={loading}
      >
        <NotificationBox
          classes={classes}
          text="Try adding, editing or removing posts. We are using a real API"
          link="https://jsonplaceholder.typicode.com"
        />

        {posts.length > 0 && (
          <InfiniteScroll
            pageStart={0}
            loadMore={this.loadMore}
            hasMore={currentPage < 10}
          >
            <Grid
              container
              spacing={3}
              style={{ flexGrow: 1 }}
              justify="center"
            >
              {postsByPage.map(post => (
                <Cards
                  key={post.id}
                  post={post}
                  onSelectPostToBeEdited={this.selectPostToBeEdited}
                  onSelectPostToBeDeleted={this.selectPostToBeDeleted}
                />
              ))}
            </Grid>
          </InfiniteScroll>
        )}

        <AddButton onSelectPostToBeAdded={this.selectPostToBeAdded} />
        <DeleteDialog
          selectedPost={selectedPost}
          openDeleteDialog={openDeleteDialog}
          onDeletePost={this.deletePost}
          onHandleCloseDeleteDialog={this.handleCloseDeleteDialog}
        />
        <AddEditDialog
          selectedPost={selectedPost}
          addOrEditText={addOrEditText}
          onBodyTextFieldChanged={this.bodyTextFieldChanged}
          onTitleTextFieldChanged={this.titleTextFieldChanged}
          openAddEditDialog={openAddEditDialog}
          onAddEditPost={this.addEditPost}
          onHandleCloseAddEditDialog={this.handleCloseAddEditDialog}
        />
        <Snackbar
          open={showSnackbar}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">{snackbarMessage}</span>}
          autoHideDuration={4000}
          onClose={this.handleSnackbarClose}
        />

        <Grid container justify="center">
          <Grid item className={classes.item}>
            <Instructions />
          </Grid>
        </Grid>
        <LinkToInfinityScroll link="https://github.com/CassetteRocks/react-infinite-scroller" />
      </PageBase>
    );
  }
}

ApiDemoPage.propTypes = {
  classes: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  posts: PropTypes.any.isRequired,
};

const mapDispatchToProps = dispatch => ({
  dispatch,
});

const mapStateToProps = createStructuredSelector({
  posts: makeSelectPosts(),
  message: makeSelectMessage(),
  loading: makeSelectLoading(),
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
)(ApiDemoPage);
