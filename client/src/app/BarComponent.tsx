import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { Bar } from "@nivo/bar";

const AbvQuery = gql`
  query AbvQuery {
    beers {
      name
      style
      position
      price
    }
  }
  `;

export const BarChart = () => {
    
  const { loading, error, data } = useQuery(AbvQuery);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (data) {
    const beers = data.beers
    console.log(beers)
    /* const modifiedBeers = beers.map(beer => {
      beer.price = parseInt(beer.price)
      return beer
    }); */
    
    //console.log(modifiedBeers)
    /* const options = {
      y: {
        axis: {
          label: "Price",
          tick: {
            values: beers.map((beer) => parseInt(beer.price)),
          },
        },
      },
      x: {
        axis: {
          label: "Name",
          tick: {
            values: beers.map((beer) => beer.name),
          },
        },
      },
    }; */

    const chart = (
      <Bar 
        data={beers}
        keys={["position"]}
        indexBy="name"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.4}
        width={600}
        height={600}
        valueScale={{ type: "linear" }}
        colors="#3182CE"
        animate={true}
        enableLabel={false}
        axisTop={null}
        axisRight={null}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "position",
          legendPosition: "middle",
          legendOffset: -40
        }}
      /> 
    )
    return (
      <div>
        <h1>ABV chart</h1>
        {chart}
      </div>
    );
  } else {
    return <div>No Beers</div>;
  }
  
  }