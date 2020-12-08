import { mobileRepository } from 'core/domain/Mobile/mobile.repository'

export const getAll = () => mobileRepository.findAll()
