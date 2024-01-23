import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { Bar } from "@nivo/bar";
import { constants } from "buffer";

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

export const BarChart = () => {
    
  const { loading, error, data } = useQuery(BeersQuery);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (data) {
    const beers = data.beers
    const randData = data.randomNumericData
    const mergedData = beers.reduce((acc, cur) => {
      acc.push({
        ...cur,
        ...randData[acc.length-1],
      })
      //console.log(acc)
      return acc;
    },[]);

    console.log(mergedData)
    const chart = (
      <Bar 
        data={mergedData}
        keys={["data"]}
        indexBy="name"
        groupMode="stacked"
        layout="horizontal"
        margin={{ top: 50, right: 130, bottom: 50, left: 180 }}
        padding={0.4}
        width={600}
        height={500}
        valueScale={{ type: "linear" }}
        colors={{scheme: 'nivo'}}
        animate={true}
        enableLabel={false}
        axisTop={null}
        axisRight={null}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "",
          legendPosition: "middle",
          legendOffset: -40
        }}
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