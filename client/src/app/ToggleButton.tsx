import { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { BarChart } from "./BarComponent";
import { PieChart } from "./PieComponent";
import { Switch } from "@mui/material";
import styles from "./page.module.css"

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

export const ToggleButton = () => {
  const [isLeft, setPosition] = useState(true)
  const { loading, error, data, refetch } = useQuery(BeersQuery);
  const [dataBatch, setDataBatch] = useState([])

  const handleChange = () => {
    setPosition(!isLeft)
  }
  const handleFetchData = () => {
    refetch()
    
  };

  return (
    <div>
      <div className={styles.description}>
        <button onClick={handleFetchData}>
          Fetch New Data
        </button>
      </div>
      <div className={styles.switch}>
        <p>Bar Chart</p><Switch onChange={handleChange} defaultChecked={false}/><p>Pie Chart</p>
      </div>
      <div>
        {isLeft?<BarChart />:<PieChart />}
      </div >

    </div>
  )
}