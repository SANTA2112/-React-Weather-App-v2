import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${({ bg }) => bg && bg}) center center/cover;
`;
