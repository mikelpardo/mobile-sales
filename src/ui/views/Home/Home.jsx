import React, { useEffect, useState } from 'react'
import { MobileList, MobileListWrapper } from 'ui/views/Home/Home.styles'
import { Searcher } from 'ui/views/Home/_components/Searcher/Searcher.jsx'
import { MobileListItem } from 'ui/views/Home/_components/MobileListItem/MobileListItem.jsx'
import { mobileService } from 'core/services/Mobile'
import { Text } from 'ui/components/Text/Text'

export const Home = () => {
  const [mobileList, setMobileList] = useState([])
  const [searcherText, setSeacherText] = useState()

  useEffect(() => {
    const loadData = async () => {
      const mobiles = await mobileService.getAll()
      setMobileList(mobiles)
    }
    loadData()
  }, [])

  const onSearchValueChange = event => setSeacherText(event.currentTarget.value.toUpperCase())

  const filterMobileList = mobile =>
    mobile.brand.toUpperCase().includes(searcherText) || mobile.model.toUpperCase().includes(searcherText)

  const getMobileList = () => {
    if (searcherText === '' || searcherText === undefined) {
      return mobileList
    }

    return mobileList.filter(filterMobileList)
  }

  return (
    <MobileListWrapper>
      <Text>Pre production change</Text>
      <Searcher onChange={onSearchValueChange} />
      <MobileList>
        {getMobileList().map(mobile => (
          <MobileListItem key={mobile.id} mobile={mobile} />
        ))}
      </MobileList>
    </MobileListWrapper>
  )
}
