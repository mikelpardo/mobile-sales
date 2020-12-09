import styled from 'styled-components/macro'
import { rem } from 'polished'
import { sizes } from 'ui/theme/sizes'

export const MobileListItemWrapper = styled.div`
  display: flex;
  /* width: ${rem(sizes.scale(110))}; */
  width: 23.7%;

  background-color: #f1f1f1;

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;

  & :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`

export const StyledMobileListItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;

  padding: ${rem(sizes.xsmall)};
`

export const StyledImg = styled.img`
  width: ${rem(sizes.scale(50))};
  height: ${rem(sizes.scale(50))};

  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${rem(sizes.xsmall)};
`

export const MobileDataWrapper = styled.div`
  width: ${rem(sizes.scale(50))};

  margin-left: auto;
  margin-right: auto;
`

export const StyledMobileInformation = styled.div`
  display: flex;
`
