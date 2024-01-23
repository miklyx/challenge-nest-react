import React from 'react';
import { useQuery } from '@apollo/client';
import { Bar } from '@nivo/bar';
import { BeersQuery, mergeData } from './dataService';
import { MergedData } from './types';

export const BarChart: React.FC = () => {
  const { loading, error, data } = useQuery(BeersQuery);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (data) {
    const mergedData:MergedData[] = mergeData(data);
    const chart = (
      <Bar 
        data={mergedData}
        keys={["data"]}
        indexBy="name"
        groupMode="grouped"
        layout="horizontal"
        reverse={true}
        margin={{ top: 50, right: 270, bottom: 50, left: 180 }}
        padding={0.4}
        width={1000}
        height={450}
        valueScale={{ type: "linear" }}
        colors={{scheme: 'set3'}}
        colorBy="indexValue"
        animate={true}
        enableLabel={false}
        axisTop={null}
        axisRight={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "",
          legendPosition: "middle",
          legendOffset: -40
        }}
        axisLeft={null}
      /> 
    )
    return (
      <div>
        {chart}
      </div>
    )} else {
      return <p>No beers</p>
    }
  }
  
  
  
