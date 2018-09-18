import React from 'react';
import styled from 'styled-components';
import { Wrapper } from "./styled";

const Hello = styled.div`
  color: red;
  font-size: 24px;
`;

export default ({ doRequest, weather, input, inputHandler, bgimg }) => {
  console.log(weather);

  return (
    <Wrapper bg={bgimg}>
      <Hello>Hello Jushka!</Hello>
      <input value={input} onChange={e => inputHandler(e.target.value)} type="text"/>
      <button onClick={doRequest}>Get Weather</button>
      { weather.error && 'Ошибка, повторите запрос' }
    </Wrapper>
  )
};
