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
  useEffect(() => {
    const dataBar = {
      type: chartType,
      data: {
        labels: labels,

        datasets: [
          {
            label: chartName,
            data: dataSet,
          },
        ],
      },
    };

    new Chart(document.getElementById("chart"), dataBar);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chartType]);

  return (
    <div className="mx-auto w-3/5 overflow-hidden">
      <div id="chart"></div>
    </div>
  );
}

export default Charts;
