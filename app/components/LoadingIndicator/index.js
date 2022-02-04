import React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';

import Wrapper from './Wrapper';

const LoadingIndicator = () => (
  <Wrapper>
    <CircularProgress />
  </Wrapper>
);

export default LoadingIndicator;
