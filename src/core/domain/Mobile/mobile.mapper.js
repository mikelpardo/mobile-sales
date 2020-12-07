export const mapMobileDtoToMobile = mobileDto => {
  return {
    id: mobileDto.id,
    brand: mobileDto.brand,
    model: mobileDto.model,
    price: mobileDto.price,
    imgUrl: mobileDto.imgUrl
  }
}

export const mapMobileListDtoToMobileList = mobileListDto => {
  return mobileListDto.map(mapMobileDtoToMobile)
}
