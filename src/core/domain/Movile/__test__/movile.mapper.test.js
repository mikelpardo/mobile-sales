import { mapMovileListDtoToMovileList } from 'core/domain/Movile/movile.mapper'
import { aMovileList, aMovileListDto } from 'core/domain/Movile/__test__/movile.builder'

describe('movile mappers test', () => {
  it('maps movile list dto to movile list', () => {
    const movileList = mapMovileListDtoToMovileList(aMovileListDto())

    expect(movileList).toEqual(aMovileList())
  })
})
