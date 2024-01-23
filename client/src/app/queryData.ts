import { useQuery, gql } from '@apollo/client'

const BeersQuery = gql`
  query BeersQuery {
    randomNumericData {
      data
    }
    beers {
      name
      price
    }
  }`;

export const queryNewData = () => {  
  const { loading, error, data } = useQuery(BeersQuery);
  if (loading) return loading;
  if (error) return error;
  if (data) {
    const beers = data.beers
    const randData = data.randomNumericData
    const mergedData = []
    for (let i = 0; i < beers.length; i++) {
      mergedData.push({
        ...beers[i],
        ...randData[i],
      });
    }
    return mergedData;
  }
}
