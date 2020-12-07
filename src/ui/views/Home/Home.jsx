import React, { useEffect, useState } from 'react'
import { MovileList, MovileListWrapper } from 'ui/views/Home/Home.styles'
import { Searcher } from 'ui/views/Home/_components/Searcher/Searcher.jsx'
import { MovileListItem } from 'ui/views/Home/_components/MovileListItem/MovileListItem.jsx'
import { movileService } from 'core/services/Movile'

export const Home = () => {
  const [movileList, setMovileList] = useState([])

  useEffect(() => {
    const loadData = async () => {
      const moviles = await movileService.getAll()
      setMovileList(moviles)
    }
    loadData()
  }, [])

  return (
    <MovileListWrapper>
      <Searcher />
      <MovileList>
        {movileList.map(movile => (
          <MovileListItem key={movile.id} movile={movile} />
        ))}
      </MovileList>
    </MovileListWrapper>
  )
}
