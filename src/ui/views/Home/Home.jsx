import React, { useEffect, useState } from 'react'
import { MobileList, MobileListWrapper } from 'ui/views/Home/Home.styles'
import { Searcher } from 'ui/views/Home/_components/Searcher/Searcher.jsx'
import { MobileListItem } from 'ui/views/Home/_components/MobileListItem/MobileListItem.jsx'
import { mobileService } from 'core/services/Mobile'

export const Home = () => {
  const [mobileList, setMobileList] = useState([])

  useEffect(() => {
    const loadData = async () => {
      const mobiles = await mobileService.getAll()
      setMobileList(mobiles)
    }
    loadData()
  }, [])

  return (
    <MobileListWrapper>
      <Searcher />
      <MobileList>
        {mobileList.map(mobile => (
          <MobileListItem key={mobile.id} mobile={mobile} />
        ))}
      </MobileList>
    </MobileListWrapper>
  )
}
