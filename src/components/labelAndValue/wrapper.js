import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flex;
  font-size: 1.125rem;
  span {
    font-size: 1rem;
    font-weight: 600;
    min-width: 45%;
    color: ${props => props.theme.primary};
  }
`;

Wrapper.propTypes = {
  theme: PropTypes.shape({}),
};

Wrapper.defaultProps = {
  theme: {},
};

export default Wrapper;
