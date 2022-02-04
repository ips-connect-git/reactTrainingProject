import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';

import layoutStyles from 'containers/Layout/styles';

const Instructions = ({ classes }) => (
  <div>
    <Typography paragraph>
      We are using rest web APIs from{' '}
      <a
        className={classes.link}
        href="https://jsonplaceholder.typicode.com/"
        target="_blank"
      >
        http://jsonplaceholder.typicode.com
      </a>{' '}
      website for this demo.
    </Typography>
    <Typography paragraph>
      Data from this service and images are used for testing and prototyping
      purposes.
    </Typography>
    <Typography paragraph>
      The following API calls are executed through actions, sagas and reducers:
    </Typography>
    <Table>
      <TableBody>
        <TableRow>
          <TableCell>GET</TableCell>
          <TableCell>
            <a
              className={classes.link}
              href="https://jsonplaceholder.typicode.com/posts"
              target="_blank"
            >
              /posts
            </a>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>GET</TableCell>
          <TableCell>
            <a
              className={classes.link}
              href="https://jsonplaceholder.typicode.com/posts/1"
              target="_blank"
            >
              /posts/1
            </a>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>POST</TableCell>
          <TableCell>/posts</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>PUT</TableCell>
          <TableCell>/posts/1</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>DELETE</TableCell>
          <TableCell>/posts/1</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
);

Instructions.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(theme => layoutStyles(theme), {
  withTheme: true,
})(Instructions);
