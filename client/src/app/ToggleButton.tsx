import { useState, useEffect } from "react";
import { BarChart } from "./BarComponent";
import { PieChart } from "./PieComponent";
import { Switch } from "@mui/material";
import styles from "./page.module.css"
import { queryNewData } from "./queryData";

export const ToggleButton = () => {
  const [isToggled, setToggle] = useState(false)
  const [isLeft, setPosition] = useState(true)

  const handleToggle =() => {
    setToggle(!isToggled)
  }
  const handleChange = () => {
    setPosition(!isLeft)
  }

  return (
    <div>
      <div className={styles.switch}>
        <p>Bar Chart</p><Switch onChange={handleChange} defaultChecked={false}/><p>Pie Chart</p>
      </div>
      <div>
        {isLeft?<BarChart />:<PieChart />}
      </div>
      <button onClick={handleToggle}>
      {isToggled?<BarChart />:<PieChart />}
      </button>
    </div>
  )
}