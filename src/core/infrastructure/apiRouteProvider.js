export const apiRouteProvider = {
  mobileList: '/api/product',
  mobileDetail: mobileId => `/api/product/${mobileId}`,
  addToCart: '/api/cart'
}
