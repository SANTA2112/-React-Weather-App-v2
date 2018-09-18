import styled from 'styled-components';
import loadimg from '../_assets/images/loading.gif';

export const LoaderWrap = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: RGB(56, 73, 93);
`;

export const Loader = styled.img.attrs({ src: loadimg })``;
