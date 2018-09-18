import React from 'react';
import styled from 'styled-components';
import { Wrapper } from "./styled";
import Loader from '../Loader';

const Hello = styled.div`
  color: red;
  font-size: 24px;
`;

export default ({ doRequest, weather, input, inputHandler, bgimg, isLoading }) => {
  console.log(weather);
  if (isLoading) return <Loader />
  return (
    <Wrapper bg={bgimg}>
      <Hello>Hello Jushka!</Hello>
      <input value={input} onChange={e => inputHandler(e.target.value)} type="text"/>
      <button onClick={doRequest}>Get Weather</button>
      { weather.error && 'Ошибка, повторите запрос' }
    </Wrapper>
  )
};
