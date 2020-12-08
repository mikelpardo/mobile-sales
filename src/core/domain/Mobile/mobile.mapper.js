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

export const mapMobileDetailDtoToMobileDetail = mobileDetailDto => {
  return {
    id: mobileDetailDto.id,
    brand: mobileDetailDto.brand,
    model: mobileDetailDto.model,
    price: mobileDetailDto.price,
    cpu: mobileDetailDto.cpu,
    os: mobileDetailDto.os,
    imgUrl: mobileDetailDto.imgUrl,
    dimentions: mobileDetailDto.dimentions,
    weight: mobileDetailDto.weight,
    displayResolution: mobileDetailDto.displayResolution,
    ram: mobileDetailDto.ram,
    primaryCamera: mobileDetailDto.primaryCamera,
    secondaryCmera: mobileDetailDto.secondaryCmera,
    battery: mobileDetailDto.battery,
    colorOptions: mobileDetailDto.options.colors,
    storageOptions: mobileDetailDto.options.storages
  }
}
