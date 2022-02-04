import React from 'react';
import PropTypes from 'prop-types';

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import styles from '../styles';

const data = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];

const VerticalLineChart = ({ classes, title }) => (
  <Paper
    style={{
      width: '100%',
      height: 400,
      padding: '30px 30px 30px 0px',
      marginBottom: 25,
    }}
    square
  >
    <Typography
      style={{ paddingLeft: 30, marginBottom: 20 }}
      gutterBottom
      variant="h2"
      className={classes.title}
    >
      {title}
    </Typography>
    <ResponsiveContainer>
      <LineChart
        layout="vertical"
        width={600}
        height={300}
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" />
        <Tooltip />
        <Legend />
        <Line dataKey="pv" stroke="#8884d8" />
        <Line dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  </Paper>
);

VerticalLineChart.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};

export default withStyles(theme => styles(theme), {
  withTheme: true,
})(VerticalLineChart);
