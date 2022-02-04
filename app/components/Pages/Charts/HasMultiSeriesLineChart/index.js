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

const series = [
  {
    name: 'Series 1',
    data: [
      { category: 'A', value: Math.random() },
      { category: 'B', value: Math.random() },
      { category: 'C', value: Math.random() },
    ],
  },
  {
    name: 'Series 2',
    data: [
      { category: 'B', value: Math.random() },
      { category: 'C', value: Math.random() },
      { category: 'D', value: Math.random() },
    ],
  },
  {
    name: 'Series 3',
    data: [
      { category: 'C', value: Math.random() },
      { category: 'D', value: Math.random() },
      { category: 'E', value: Math.random() },
    ],
  },
];

const HasMultiSeriesLineChart = ({ classes, title }) => (
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
      <LineChart width={600} height={300}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="category"
          type="category"
          allowDuplicatedCategory={false}
        />
        <YAxis dataKey="value" />
        <Tooltip />
        <Legend />
        {series.map(s => (
          <Line dataKey="value" data={s.data} name={s.name} key={s.name} />
        ))}
      </LineChart>
    </ResponsiveContainer>
  </Paper>
);

HasMultiSeriesLineChart.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};

export default withStyles(theme => styles(theme), {
  withTheme: true,
})(HasMultiSeriesLineChart);
