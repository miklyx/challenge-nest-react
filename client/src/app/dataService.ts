import { gql } from '@apollo/client'

export const BeersQuery = gql`
  query BeersQuery {
    randomNumericData {
      data
    }
    beers {
      name
      price
    }
  }`;

export const mergeData = (data:any) => {
  const beers = data.beers
  const randData = data.randomNumericData
  const mergedData = []
  for (let i = 0; i < beers.length; i++) {
    mergedData.push({
      ...beers[i],
      ...randData[i],
    });
  }
  return mergedData
}