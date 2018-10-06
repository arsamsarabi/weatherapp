import styled from 'styled-components';
import PropTypes from 'prop-types';
import { pageContainer } from 'styles/helpers';

const Wrapper = styled.div`
  ${pageContainer()}
`;

Wrapper.propTypes = {
  theme: PropTypes.shape({}),
};

Wrapper.defaultProps = {
  theme: {},
};

export default Wrapper;
