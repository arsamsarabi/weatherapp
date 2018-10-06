import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flex;
  span {
    font-weight: 500;
  }
`;

Wrapper.propTypes = {
  theme: PropTypes.shape({}),
};

Wrapper.defaultProps = {
  theme: {},
};

export default Wrapper;
