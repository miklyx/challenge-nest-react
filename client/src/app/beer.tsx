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
    return (
      <div>
      {JSON.stringify(data)}
      </div>
    );
  } else {
    return <div>No Beers</div>;
  }
  
};