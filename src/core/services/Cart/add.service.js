import { cartRepository } from 'core/domain/Cart/cart.repository'

export const add = mobileData => cartRepository.add(mobileData)
