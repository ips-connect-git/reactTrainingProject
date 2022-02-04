import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import layoutStyles from 'containers/Layout/styles';
import LinkToReactTable from 'components/Credits/ReactTable/linkToReactTable';
import PageBase from 'components/PageBase';

import makeData from './makeData';
import styles from './styles';

class ReactTableDemo extends React.PureComponent {
  state = {
    data: makeData(),
    loading: true,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false }); // delay rendering for permormance purposes
    }, 1000);
  }

  render() {
    const { classes } = this.props;
    const { data, loading } = this.state;

    return (
      <PageBase
        title="Badges Page"
        navigation="Application / UI Elements / Badges Page"
        minHeight={500}
        loading={loading}
      >
        <Grid container justify="center" direction="row">
          <Grid item xs={12}>
            <Paper square className={classes.paper}>
              {loading ? (
                <div className={classes.loadingText}>loading...</div>
              ) : (
                <ReactTable
                  data={data}
                  columns={[
                    {
                      Header: 'Search',
                      columns: [
                        {
                          Header: 'Category',
                          accessor: 'category',
                        },
                        {
                          Header: 'Key Word',
                          id: 'keyWord',
                          accessor: d => d.keyWord,
                        },
                      ],
                    },
                    {
                      Header: 'Statistics',
                      columns: [
                        {
                          Header: 'Age',
                          accessor: 'age',
                          aggregate: vals => _.round(_.mean(vals)),
                          Aggregated: row => <span>{row.value} (avg)</span>,
                        },
                        {
                          Header: 'Visits',
                          accessor: 'visits',
                          aggregate: vals => _.sum(vals),
                        },
                      ],
                    },
                  ]}
                  pivotBy={['category', 'keyWord']}
                  defaultPageSize={10}
                  className="-striped -highlight"
                />
              )}
            </Paper>
          </Grid>
        </Grid>

        <LinkToReactTable link="https://react-table.js.org/#/story/simple-table" />
      </PageBase>
    );
  }
}

ReactTableDemo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(
  theme => ({
    ...layoutStyles(theme),
    ...styles(),
  }),
  {
    withTheme: true,
  },
)(ReactTableDemo);
