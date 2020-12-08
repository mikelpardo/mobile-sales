import { mobileRepository } from 'core/domain/Mobile/mobile.repository'

export const getDetail = mobileId => mobileRepository.findDetail(mobileId)
