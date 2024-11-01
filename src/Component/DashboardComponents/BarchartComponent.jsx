import { dummyBarChartData } from "../../utils/dashboardData/dashboardDummyData";
function BarChartComponent() {
    return (
      <div className="bg-white p-4 rounded shadow-lg mt-4">
        <h2 className="font-bold text-lg mb-4">Feature Usage</h2>
        <div className="h-64 flex justify-center items-center">
          <p className="text-gray-500">Bar Chart Placeholder</p>
          <ul>
            {dummyBarChartData.map((item, index) => (
              <li key={index}>
                {item.feature}: {item.usage}%
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  
  export { BarChartComponent };