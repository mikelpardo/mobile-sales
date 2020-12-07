export const mapMovileDtoToMovile = movileDto => {
  return {
    id: movileDto.id,
    brand: movileDto.brand,
    model: movileDto.model,
    price: movileDto.price,
    imgUrl: movileDto.imgUrl
  }
}

export const mapMovileListDtoToMovileList = movileListDto => {
  return movileListDto.map(mapMovileDtoToMovile)
}
