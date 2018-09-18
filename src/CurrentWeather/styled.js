import styled from 'styled-components';

export const Wrapper = styled.div`
  display: inline-block;
  border-radius: 6px;
  color: #fff;
  background-color: rgba(255,255,255,.3);
  padding: 12px;
`;

export const Name = styled.h2`
  font-size: 50px;
  text-shadow: 0 0 12px black;
  margin-bottom: 20px;
`;

export const TempWrap = styled.div`
  display: flex;
  align-items: center;
  & img {
    height: 60px;
    object-fit: cover;
    margin-left: 30px;
    filter: drop-shadow(0 0 1px black);
  }
`;

export const Temp = styled.div`
  font-size: 60px;
  font-weight: 600;
  position: relative;
  flex: 0 0 auto;
  &::before {
    content: ' ℃';
    display: block;
    position: absolute;
    top: 8px;
    right: -20px;
    font-size: 20px;
  }
`;

export const Text = styled.div``;
