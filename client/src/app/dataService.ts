import { gql } from '@apollo/client';
import { Beer, RandNumData } from './types';

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

export const mergeData = (data: any) => {
  const beers :Beer[] = data.beers;
  const randData: RandNumData[] = data.randomNumericData;
  const mergedData = [];
  for (let i = 0; i < beers.length; i++) {
    mergedData.push({
      ...beers[i],
      ...randData[i],
    });
  }
  return mergedData;
}