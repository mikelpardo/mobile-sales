import React from 'react'
import { Wrapper, InnerWrapper, SecondaryLine, TernaryLine, PrimaryLine } from 'ui/components/Spinner/Spinner.styles'

export const Spinner = () => (
  <Wrapper>
    <InnerWrapper>
      <SecondaryLine />
      <TernaryLine />
      <PrimaryLine />
    </InnerWrapper>
  </Wrapper>
)
