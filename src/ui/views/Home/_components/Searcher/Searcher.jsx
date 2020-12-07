import React from 'react'
import PropTypes from 'prop-types'
import { Input } from 'ui/components/Input/Input.jsx'
import { SearcherWrapper, StyledInput } from 'ui/views/Home/_components/Searcher/Searcher.styles'

export const Searcher = ({ onChange }) => {
  return (
    <SearcherWrapper>
      <StyledInput>
        <Input onChange={onChange} placeHolder="Search" />
      </StyledInput>
    </SearcherWrapper>
  )
}

Searcher.propTypes = {
  onChange: PropTypes.func
}
