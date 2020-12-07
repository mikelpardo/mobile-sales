import { movileRepository } from 'core/domain/Movile/movile.repository'
import { aMovileList } from 'core/domain/Movile/__test__/movile.builder'
import { movileService } from 'core/services/Movile'

describe('Get all moviles service', () => {
  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('gets all moviles', async () => {
    jest.spyOn(movileRepository, 'findAll').mockResolvedValue(aMovileList())

    const movileList = await movileService.getAll()

    expect(movileList).toEqual(aMovileList())
  })
})
