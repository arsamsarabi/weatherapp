import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
`;

Wrapper.propTypes = {
  theme: PropTypes.shape({}),
};

Wrapper.defaultProps = {
  theme: {},
};

export default Wrapper;
