import React from 'react';
import PropTypes from 'prop-types';

const Error = ({ msg }) => <label className='text-danger'>{msg}</label>;

Error.propTypes = {
  msg: PropTypes.string.isRequired,
};

export default Error;
