import React from 'react';
import { Wrapper } from "./styled";

const SearchBar = ({ doRequest, input, inputHandler, }) => {
  return (
    <Wrapper>
      <input value={input} onChange={e => inputHandler(e.target.value)} type="text"/>
      <button onClick={doRequest}>Get Weather</button>
    </Wrapper>
  )
}

export default SearchBar
