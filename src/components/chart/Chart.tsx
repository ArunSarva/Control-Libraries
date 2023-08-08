/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Chart, initTE } from "tw-elements";
initTE({ Chart });
interface props {
  chartType: string;
  labels: string[];
  chartName: string;
  dataSet: Number[];
}
function Charts(props: props) {
  const { chartType, labels, chartName, dataSet } = props;
  const chartlabels = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday ",
  ];
  const localDataSet = [2112, 2343, 2545, 3423, 2365, 1985, 987];

  useEffect(() => {
    const dataBar = {
      type: chartType ? chartType : "bar",
      data: {
        labels: labels.length === 0 ? chartlabels : labels,

        datasets: [
          {
            label: chartName,
            data: dataSet.length === 0 ? localDataSet : dataSet,
          },
        ],
      },
    };

    new Chart(document.getElementById("chart"), dataBar);
  }, [chartName]);

  return (
    <div className="mx-auto w-3/5 overflow-hidden">
      <div id="chart"></div>
    </div>
  );
}

export default Charts;
