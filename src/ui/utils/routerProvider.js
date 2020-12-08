export const routeProvider = {
  home: '/',
  mobileDetail: {
    historyPath: mobileId => `/mobile/${mobileId}/detail`,
    path: '/mobile/:mobileId/detail',
    params: {
      mobileId: 'mobileId'
    }
  }
}
