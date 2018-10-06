import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  background-color: ${props => props.theme.white};
  width: 270px;
  height: 350px;
  border-radius: 5px;
  box-shadow: ${props => props.theme.boxShadow.small};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  header {
    background-color: ${props => props.theme.primary};
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
    h2 {
      font-size: 0.8rem;
    }
    .column-2 {
      img {
        width: 40px;
      }
    }
  }
  main {
    padding: 20px;
    & > div {
      &:not(:first-of-type) {
        margin-top: 8px;
      }
      &:first-of-type {
        text-transform: capitalize;
      }
    }
  }
  footer {
    min-height: 40px;
    margin-top: auto; 
    padding: 12px 0 0 12px;
    display: flex;
    justify-content: space-between;
    .unitControl {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      P {
        color: ${props => props.theme.primary};
      }
    }
    button {
      padding: 6px;
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
