import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background:
    linear-gradient(to left, rgba(0,0,0,.3),
    rgba(0,0,0,.3)) ,url(${({ bg }) => bg && bg}) center center/cover;
  position: relative;

`;

export const SmallWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 0 0 50px;
`;
