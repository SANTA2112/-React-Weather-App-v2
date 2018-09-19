import React from 'react';
import { Wrapper, Input, SearchButton } from "./styled";

const SearchBar = ({ doRequest, input, inputHandler, }) => (
  <Wrapper>
    <Input value={input} onChange={e => inputHandler(e.target.value)} type="text"/>
    <SearchButton onClick={doRequest}>Get Weather</SearchButton>
  </Wrapper>
)

export default SearchBar
