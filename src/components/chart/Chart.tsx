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
      name: "User one ",
      "Active User": 1000,
    },
    {
      name: "User two",
      "Active User": 3000,
    },
    {
      name: "User three",
      "Active User": 2000,
    },
    {
      name: "User four",
      "Active User": 2780,
    },
    {
      name: "User five",
      "Active User": 1890,
    },
    {
      name: "User six",
      "Active User": 2390,
    },
    {
      name: "User seven",
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
          <Tooltip />
          <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
