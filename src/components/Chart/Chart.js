import "./Chart.css";
import ChartBar from "./ChartBar";
import React from "react";
const Chart = (props) => {
    const dataPointsValues=props.dataPoints.map(dataPoint=>dataPoint.value);
    const totalMaximun=Math.max(...dataPointsValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoints) => (
        <ChartBar
           key={dataPoints.label}
          value={dataPoints.value}
          maxValue={totalMaximun}
          label={dataPoints.label}
        />
      ))}
    </div>
  );
};
export default Chart;
