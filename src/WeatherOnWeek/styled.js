import styled from 'styled-components'

export const Wrapper = styled.div`
  display: inline-flex;
  border-radius: 6px;
  color: #fff;
  background-color: rgba(255,255,255,.3);
  padding: 12px;
  margin-top: 80px;
`;

export const NotationBlock = styled.div`
  align-self: flex-end;
`;

export const NotationText = styled.div``;

export const TextWrapper = styled.div`
  margin-bottom: 24px;
  &:last-child {
    margin-bottom: 0;
  }
`
export const InfoWrap = styled.div`
  margin-left: 10px;
  display: flex;
  text-align: center;
`;

export const UL = styled.ul`
  list-style: none;
  margin-right: 30px;
  &:first-child {
    margin-left: 10px;
  }
  &:last-child {
    margin-right: 0;
  }
`;

export const Date = styled.li`
  margin-bottom: 10px;
  font-weight: 600;
`;

export const DayTemp = styled.li`
  font-size: 20px;
  &::after {
    content: ' °С';
  }
`;

export const NightTemp = styled.li`
  font-size: 18px;
  &::after {
    content: ' °С';
  }
`;

export const SmallSpan = styled.span`
  font-size: 14px;
`;

export const BoldSpan = styled.span`
  font-family: 'Open Sans Semibold';
`;

export const Img = styled.img`
  height: 60px;
  object-fit: cover;
  filter: drop-shadow(0 0 1px black);
`;
