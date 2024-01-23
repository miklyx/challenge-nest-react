import React, { useEffect, useState } from "react";
import { Bar } from "@nivo/bar";

export const BarTest = (mergedData:any) => {
  
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
        colors={{scheme: 'category10'}}
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
        <h1>Beer chart</h1>
        {chart}
      </div>
    );
  }
  
  
  
