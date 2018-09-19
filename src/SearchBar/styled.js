import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: #000;
  padding: 12px;
  display: flex;
  justify-content: flex-end;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const SearchButton = styled.button`
  color: rgba(255,255,255,.8);
  padding: 2px 10px;
  border: 1px solid #fff;
  border-left: none;
  background-color: #000;
  cursor: pointer;
  &:hover {
    color: #fff;
  }
`;

export const Input = styled.input`
  padding: 3px 0 3px 5px;
  border: none;
  background-color: rgba(255,255,255,.8);
  &:focus {
    background-color: #fff;
  }
`;
