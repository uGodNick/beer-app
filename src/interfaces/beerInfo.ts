export interface BeerInfo {
  beerName: string;
  beerBrand: string;
  beerStyle: string;
  beerHop: string;
  beerYeast: string;
  beerMalts: string;
  beerIbu: string;
  beerAlcohol: string;
  beerBlg: string;
}

export function buildBeerInfo(beerData: Record<string, undefined>): BeerInfo {
  if (typeof beerData.name == 'undefined' || typeof beerData.name != 'string') {
    throw Error('received data "beerData.name" has not valid value');
  }

  if (
    typeof beerData.brand == 'undefined' ||
    typeof beerData.brand !== 'string'
  ) {
    throw Error('received data "beerData.brand" has not valid value');
  }

  if (
    typeof beerData.style == 'undefined' ||
    typeof beerData.style !== 'string'
  ) {
    throw Error('received data "beerData.style" has not valid value');
  }

  if (typeof beerData.hop == 'undefined' || typeof beerData.hop !== 'string') {
    throw Error('received data "beerData.hop" has not valid value');
  }

  if (
    typeof beerData.yeast == 'undefined' ||
    typeof beerData.yeast !== 'string'
  ) {
    throw Error('received data "beerData.yeast" has not valid value');
  }

  if (
    typeof beerData.malts == 'undefined' ||
    typeof beerData.malts !== 'string'
  ) {
    throw Error('received data "beerData.malts" has not valid value');
  }

  if (typeof beerData.ibu == 'undefined' || typeof beerData.ibu !== 'string') {
    throw Error('received data "beerData.ibu" has not valid value');
  }

  if (
    typeof beerData.alcohol == 'undefined' ||
    typeof beerData.alcohol !== 'string'
  ) {
    throw Error('received data "beerData.alcohol" has not valid value');
  }

  if (typeof beerData.blg == 'undefined' || typeof beerData.blg !== 'string') {
    throw Error('received data "beerData.blg" has not valid value');
  }

  return {
    beerName: beerData.name,
    beerBrand: beerData.brand,
    beerStyle: beerData.style,
    beerHop: beerData.hop,
    beerYeast: beerData.yeast,
    beerMalts: beerData.malts,
    beerIbu: beerData.ibu,
    beerAlcohol: beerData.alcohol,
    beerBlg: beerData.blg
  };
}
