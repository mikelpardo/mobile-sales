import { movileRepository } from 'core/domain/Movile/movile.repository'

export const getAll = () => movileRepository.findAll()
