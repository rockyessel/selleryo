import { Bar } from "react-chartjs-2";
export const BarChart = ({
  chartData,
  title,
}: {
  chartData: any;
  title: string;
}) => {
  return (
    <div className="w-full">
      <Bar
        data={{
          labels: chartData?.map((row: any) => row.label),
          datasets: [
            {
              label: "",
              data: chartData?.map((row: any) => row.value),
              backgroundColor: "#a7f3d0",
            },
          ],
        }}
        // data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: title,
            },
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
};
