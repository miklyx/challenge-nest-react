import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { Pie } from "@nivo/pie";

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

export const PieChart = () => {
    
  const { loading, error, data } = useQuery(BeersQuery);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
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
    const chart = (
      <Pie 
        data={mergedData}
        id="name"
        value="data"
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        width={1000}
        height={450}
        startAngle={35}
        endAngle={325}
        innerRadius={0.2}
        activeOuterRadiusOffset={18}
        colors={{scheme: 'category10'}}
        animate={true}
      /> 
    )
    return (
      <div>
        <h1>Beer chart</h1>
        {chart}
      </div>
    );
  } else {
    return <div>No Beers</div>;
  }
  
  }