export const aMobileData = (...options) => {
  const defaults = {
    id: 'ZmGrkLRPXOTpxsU4jjAcv',
    colorCode: 1000,
    storageCode: 2000
  }

  return Object.assign({}, defaults, ...options)
}
