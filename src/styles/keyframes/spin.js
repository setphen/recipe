import {keyframes} from 'react-emotion';

export default () => keyframes`
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
`;
