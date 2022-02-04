import React from 'react';
import PropTypes from 'prop-types';

import Fade from '@material-ui/core/Fade';

const Transition = ({ animate, delay, children }) => (
  <Fade in={animate} style={{ transitionDelay: delay }}>
    <div>{children}</div>
  </Fade>
);

Transition.propTypes = {
  animate: PropTypes.bool,
  children: PropTypes.node.isRequired,
  delay: PropTypes.number,
};

Transition.defaultProps = {
  animate: false,
  delay: 200,
};

export default Transition;
