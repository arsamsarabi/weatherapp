import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  background-color: ${props => props.theme.white};
  width: 280px;
  height: 380px;
  border-radius: 5px;
  box-shadow: ${props => props.theme.boxShadow.small};
  overflow: hidden;
  header {
    background-color: ${props => props.theme.black};
    padding-bottom: 6px;
    padding: 12px;
    display: flex;
    .column-1 {
      width: 90%;
    }
    h1, h2 {
      font-family: ${props => props.theme.fontHeading};
      color: ${props => props.theme.white};
    }
    h1 {
      font-size: 2rem;
      margin-bottom: 12px;
    }
    .column-2 {
      img {
        width: 40px;
      }
    }
  }
`;

Wrapper.propTypes = {
  theme: PropTypes.shape({}),
};

Wrapper.defaultProps = {
  theme: {},
};

export default Wrapper;
