import React from 'react'
import { Input } from 'ui/components/Input/Input.jsx'
import { SearcherWrapper, StyledInput } from 'ui/views/Home/_components/Searcher/Searcher.styles'

export const Searcher = () => {
  const onChange = event => {
    console.log(event.currentTarget.value)
  }

  return (
    <SearcherWrapper>
      <StyledInput>
        <Input onChange={onChange} placeHolder="Search" />
      </StyledInput>
    </SearcherWrapper>
  )
}
