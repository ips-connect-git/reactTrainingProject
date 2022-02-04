import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import layoutStyles from 'containers/Layout/styles';
import LinkToReactTable from 'components/Credits/ReactTable/linkToReactTable';
import matchSorter from 'match-sorter';
import NotificationBox from 'components/NotificationBox';
import PageBase from 'components/PageBase';
import reducer from 'containers/Pages/ApiDemoPage/reducer';
import saga from 'containers/Pages/ApiDemoPage/saga';
import {
  makeSelectPosts,
  makeSelectLoading,
} from 'containers/Pages/ApiDemoPage/selectors';
import { makeSelectLocation } from 'containers/App/selectors';
import { getPosts } from 'containers/Pages/ApiDemoPage/actions';

export class DynamicRoutesDemoPage extends React.PureComponent {
  state = {
    page: 0,
  };

  componentDidMount() {
    // Get all posts
    this.props.dispatch(getPosts());
    this.setCurrentPage();
  }

  setCurrentPage = () => {
    const { location } = this.props;
    let page = 0;
    const { search } = location;
    if (search) {
      const arr = search.split('?page=');
      if (arr.length > 1) {
        page = Number(arr[1]);
      }
    }
    this.setState({ page });
  };

  onPageChange = pageIndex => {
    this.setState({ page: pageIndex });
  };

  render() {
    const { posts, loading, classes } = this.props;
    const { page } = this.state;

    const columns = [
      {
        Header: '',
        accessor: 'id',
        maxWidth: 36,
        Cell: row => (
          <Link to={`/posts/${row.original.id}`}>
            <img
              style={{ height: 24, textAlign: 'center' }}
              src={`https://s3.amazonaws.com/fortressassets/images/posts/${
                row.value
              }_s.jpg`}
              alt={`${row.value}_s.jpg`}
            />
          </Link>
        ),
      },
      {
        Header: 'Id',
        accessor: 'id',
        maxWidth: 50,
        Cell: row => (
          <div style={{ textAlign: 'center' }}>{row.original.id}</div>
        ),
      },
      {
        Header: 'Title',
        accessor: 'title',
        maxWidth: 400,
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ['title'] }),
        filterAll: true,
        Cell: row => (
          <Link className={classes.link} to={`/posts/${row.original.id}`}>
            {row.original.title}
          </Link>
        ),
      },
      {
        Header: 'Body',
        accessor: 'body',
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ['body'] }),
        filterAll: true,
      },
    ];

    return (
      <PageBase
        title="Dynamic Routes"
        navigation="Application / Dynamic Routes"
        minHeight={180}
        loading={loading}
      >
        <NotificationBox text="Click on an item below in order to navigate" />

        <Grid container spacing={3} className={classes.container}>
          <Grid item xs={12}>
            <Paper square style={{ padding: 20 }}>
              {posts && !loading ? (
                <ReactTable
                  page={page}
                  onPageChange={this.onPageChange}
                  columns={columns}
                  data={posts}
                  filterable
                  defaultFilterMethod={(filter, row) =>
                    String(row[filter.id]) === filter.value
                  }
                  defaultPageSize={10}
                  className="-striped -highlight"
                  showPaginationBottom
                />
              ) : (
                <div className={classes.loadingText}>loading...</div>
              )}
            </Paper>
          </Grid>
        </Grid>

        <LinkToReactTable link="https://react-table.js.org/#/story/simple-table" />
      </PageBase>
    );
  }
}

DynamicRoutesDemoPage.propTypes = {
  classes: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  location: PropTypes.any.isRequired,
  posts: PropTypes.any.isRequired,
};

const mapDispatchToProps = dispatch => ({
  dispatch,
});

const mapStateToProps = createStructuredSelector({
  posts: makeSelectPosts(),
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
  withStyles(theme => layoutStyles(theme), {
    withTheme: true,
  }),
)(DynamicRoutesDemoPage);
