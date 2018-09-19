import styled from 'styled-components'

export const UL = styled.ul`
  list-style: none;
  margin-right: 20px;
`;

export const UlItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 6px;
  color: #fff;
  background-color: rgba(255,255,255,.3);
  padding: 12px;
  margin-top: 5px;
  &:first-child {
    margin-top: 0;
  }
`;

export const Time = styled.span``;

export const Type = styled.span`
  margin-left: 40px;
`;

export const Img = styled.img`
  height: 60px;
  object-fit: cover;
  margin-left: 30px;
  filter: drop-shadow(0 0 1px black);
`;

export const Name = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #fff;
`;
