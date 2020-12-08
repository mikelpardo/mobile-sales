export const localStorageService = {
  save: (name, value) => {
    window.localStorage.setItem(
      name,
      JSON.stringify({
        items: value,
        expiryTime: new Date(new Date().getTime() + 60 * 60 * 1000).getTime()
      })
    )
  },

  get: name => {
    const storageData = JSON.parse(window.localStorage.getItem(name))
    if (storageData !== undefined && storageData !== null && storageData.expiryTime > new Date().getTime()) {
      return storageData.items
    }
    return undefined
  }
}
