import React from 'react';
import PropTypes from 'prop-types';

import {
  ResponsiveContainer,
  Bar,
  BarChart,
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
  { name: 'Page A', uv: 4000, female: 2400, male: 2400 },
  { name: 'Page B', uv: 3000, female: 1398, male: 2210 },
  { name: 'Page C', uv: 2000, female: 9800, male: 2290 },
  { name: 'Page D', uv: 2780, female: 3908, male: 2000 },
  { name: 'Page E', uv: 1890, female: 4800, male: 2181 },
  { name: 'Page F', uv: 2390, female: 3800, male: 2500 },
  { name: 'Page G', uv: 3490, female: 4300, male: 2100 },
];

const MixBarChart = ({ classes, title }) => (
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
      style={{ paddingLeft: 30, marginBottom: 10 }}
      gutterBottom
      variant="h2"
      className={classes.title}
    >
      {title}
    </Typography>
    <ResponsiveContainer>
      <BarChart
        width={600}
        height={300}
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 30 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="female" stackId="a" fill="#8884d8" />
        <Bar dataKey="male" stackId="a" fill="#82ca9d" />
        <Bar dataKey="uv" fill="#ffc658" />
      </BarChart>
    </ResponsiveContainer>
  </Paper>
);

MixBarChart.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};

export default withStyles(theme => styles(theme), {
  withTheme: true,
})(MixBarChart);
