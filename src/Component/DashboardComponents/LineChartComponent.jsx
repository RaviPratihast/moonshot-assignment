import {dummyLineChartData} from "../../utils/dashboardData/dashboardDummyData"
function LineChartComponent() {
    return (
      <div className="bg-white p-4 rounded shadow-lg mt-4">
        <h2 className="font-bold text-lg mb-4">Monthly Trends</h2>
        <div className="h-64 flex justify-center items-center">
          <p className="text-gray-500">Line Chart Placeholder</p>
          <ul>
            {dummyLineChartData.map((item, index) => (
              <li key={index}>
                {item.month}: {item.value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  
  export { LineChartComponent };