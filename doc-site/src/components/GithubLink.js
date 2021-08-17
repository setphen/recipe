import {keyframes} from '@emotion/core';
import styled from '@emotion/styled';

const octocatWave = keyframes`
  0%, 100% {
    transform: rotate(0);
  }
  20%, 60% {
    transform: rotate(-25deg);
  }
  40%, 80% {
    transform: rotate(10deg);
  }
`;

const Link = styled.a`
  &:hover .octo-arm {
    animation: ${octocatWave} 560ms ease-in-out;
  }
  & .octo-arm {
    transform-origin: 130px 106px;
  }
  @media screen and (max-width: 500px) {
    &:hover .octo-arm {
      animation: none;
    }
    & .octo-arm {
      animation: ${octocatWave} 560ms ease-in-out;
    }
  }
`;

const Svg = styled.svg`
  z-index: 99;
  fill: #fff;
  color: #88bb40;
  position: absolute;
  top: 0;
  border: 0;
  right: 0;
`;

export const GithubLink = ({repository}) => (
  <Link href={repository} target="_blank" aria-label="View source on GitHub">
    <Svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/Svg">
      <use xlinkHref="#githubLogo" />
    </Svg>
  </Link>
);
