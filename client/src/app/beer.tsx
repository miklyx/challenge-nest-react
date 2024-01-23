import { useQuery, gql } from "@apollo/client";

const BeerQuery = gql`
  query BeerQuery {
    beers {
      brewery
      abv
      ibu
      name
      style
      price
    }
  }
`;

export const Beer = () => {
  const { loading, error, data } = useQuery(BeerQuery);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (data) {
    const beers = data.beers
    //const beerTable = data.beers.map(beer => ({
    //  name: beer.name,
    //  abv: beer.abv
    //}))
    return (
      <div>
        <ul>
          {beers.map((beer, index) => (
            <li key={beer.id || index}>
              <p>{beer.name}</p>
              <p>{beer.abv}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  } else {
    return <div>No Beers</div>;
  }
  
};