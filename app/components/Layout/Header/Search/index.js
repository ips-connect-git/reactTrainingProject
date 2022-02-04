import React from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';

const Search = React.forwardRef(({ text }, ref) => (
  <TextField
    ref={ref}
    autoFocus
    placeholder="Search..."
    fullWidth
    margin="dense"
    defaultValue={text}
  />
));

Search.propTypes = {
  text: PropTypes.string,
};

export default Search;
