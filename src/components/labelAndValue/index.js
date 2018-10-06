import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './wrapper';

const LabelAndValue = ({ label, value }) => (
  <Wrapper>
    <span>{`${label}:`}</span>
    {value}
  </Wrapper>
);

LabelAndValue.propTypes = {
  label: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

LabelAndValue.defaultProps = {
  label: '',
  value: '',
};

export default LabelAndValue;
