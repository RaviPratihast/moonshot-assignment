import React, { useState } from "react";

function FiltersComponents() {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [dateRange, setDateRange] = useState({ start: "", end: "" });

  return (
    <div className="p-4 bg-white shadow-lg rounded">
      <h2 className="font-bold text-lg mb-4">Filters</h2>
      <div>
        <label className="block font-semibold mb-1">Age</label>
        <select
          onChange={(e) => setAge(e.target.value)}
          className="p-2 w-full border rounded"
        >
          <option value="">All</option>
          <option value="15-25">15-25</option>
          <option value=">25">Over 25</option>
        </select>
      </div>
      <div>
        <label className="block font-semibold mt-4 mb-1">Gender</label>
        <select
          onChange={(e) => setGender(e.target.value)}
          className="p-2 w-full border rounded"
        >
          <option value="">All</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div>
        <label className="block font-semibold mt-4 mb-1">Date Range</label>
        <input
          type="date"
          onChange={(e) =>
            setDateRange({ ...dateRange, start: e.target.value })
          }
          className="p-2 w-full border rounded"
        />
        <input
          type="date"
          onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
          className="p-2 w-full border rounded mt-2"
        />
      </div>
    </div>
  );
}

export { FiltersComponents };
