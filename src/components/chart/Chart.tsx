import React from "react";
import "./chart.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface Props {}

export const Chart: React.FC<Props> = (props: any): any => {
  const data = [
    {
      name: "Page A",
      "Active User": 4000,
    },
    {
      name: "Page B",
      "Active User": 3000,
    },
    {
      name: "Page C",
      "Active User": 2000,
    },
    {
      name: "Page D",
      "Active User": 2780,
    },
    {
      name: "Page E",
      "Active User": 1890,
    },
    {
      name: "Page F",
      "Active User": 2390,
    },
    {
      name: "Page G",
      "Active User": 3490,
    },
  ];

  return (
    <div className="chart">
      <h3 className="chartTitle">User Analytics</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line type="monotone" dataKey="Active User" stroke="#5550bd" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
