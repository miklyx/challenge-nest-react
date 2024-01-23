import React from 'react';
import { useQuery } from '@apollo/client';
import { Pie } from '@nivo/pie';
import { BeersQuery, mergeData } from './dataService';
import { MergedData } from './types';

export const PieChart: React.FC = () => {
    
  const { loading, error, data } = useQuery(BeersQuery);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (data) {
    const mergedData:MergedData[] = mergeData(data);
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
        colors={{scheme: 'set3'}}
        animate={true}
      /> 
    )
    return (
      <div>
        {chart}
      </div>
    );
  } else {
    return <div>No Beers</div>;
  }
  
  }