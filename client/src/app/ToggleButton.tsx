import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { BarChart } from './BarComponent';
import { PieChart } from './PieComponent';
import { Switch } from '@mui/material';
import styles from './page.module.css'
import { BeersQuery } from './dataService';
import { MergedData } from './types';

export const ToggleButton: React.FC = () => {
  const [isLeft, setPosition] = useState<boolean>(true);
  const { loading, error, data, refetch } = useQuery<{data:MergedData}>(BeersQuery);

  const handleChange = () => {
    setPosition(!isLeft);
  }
  const handleFetchData = () => {
    refetch();
  };

  return (
    <div>
      <div className={styles.upperBar}>
        <button onClick={handleFetchData} className={styles.button}>
          Fetch New Data
        </button>
        <div className={styles.switch}>
          <p>Bar Chart</p><Switch onChange={handleChange} defaultChecked={false}/><p>Pie Chart</p>
        </div>
      </div>
      <div>
        {isLeft?<BarChart />:<PieChart />}
      </div >

    </div>
  )
}