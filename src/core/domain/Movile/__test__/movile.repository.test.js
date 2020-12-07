import { movileRepository } from 'core/domain/Movile/movile.repository'
import { aMovileList, aMovileListDto } from 'core/domain/Movile/__test__/movile.builder'
import { fontTestApiClient } from 'core/infrastructure/frontTestApiClient'

describe('Movile repository', () => {
  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('finds all moviles', async () => {
    jest.spyOn(fontTestApiClient, 'get').mockResolvedValue(aMovileListDto())

    const movileList = await movileRepository.findAll()

    expect(movileList).toEqual(aMovileList())
  })
})
