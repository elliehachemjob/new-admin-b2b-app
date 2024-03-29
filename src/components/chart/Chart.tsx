import React from "react";
import "./chart.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface Props {
  title: string;
  data: any[];
  dataKey: string;
  grid: boolean;
}

export const Chart: React.FC<Props> = (props: any): any => {
  return (
    <div className="chart">
      <h3 className="chartTitle">{props.title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={props.data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line type="monotone" dataKey={props.dataKey} stroke="#5550bd" />
          <Tooltip />
          {props.grid && (
            <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
