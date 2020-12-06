import React from 'react'
import { MovileList, MovileListWrapper } from 'ui/views/Home/Home.styles'
import { Searcher } from 'ui/views/Home/_components/Searcher/Searcher.jsx'
import { MovileListItem } from 'ui/views/Home/_components/MovileListItem/MovileListItem.jsx'

export const Home = () => {
  return (
    <MovileListWrapper>
      <Searcher />
      <MovileList>
        <MovileListItem />
        <MovileListItem />
        <MovileListItem />
        <MovileListItem />
        <MovileListItem />
      </MovileList>
    </MovileListWrapper>
  )
}
