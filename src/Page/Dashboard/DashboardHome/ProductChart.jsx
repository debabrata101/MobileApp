import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Legend, Tooltip } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const ProductChart = () => {
  const data = {
    labels: ["Samsung", "Apple", "Google Pixel", "Huawei", "OnePlus"],
    datasets: [
      {
        data: [300, 50, 100, 150, 200],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
        ],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: "right",
      },
    },
  };

  return (
    <div className="text-center">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default ProductChart;
