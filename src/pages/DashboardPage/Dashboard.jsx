// import React from "react";

import {
  FiltersComponents,
  BarChartComponent,
  LineChartComponent,
} from "../../Component/DashboardComponents/Index-Dashboard-components";

function Dashboard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
      <div className="lg:col-span-1">
        {/* <Filters /> */}
        <FiltersComponents />
      </div>
      <div className="lg:col-span-3">
        <BarChartComponent />
        <LineChartComponent />
      </div>
    </div>
  );
}

export { Dashboard };
