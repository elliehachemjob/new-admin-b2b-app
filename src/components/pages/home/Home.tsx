import React from "react";
import { FeaturedInfo } from "../../featuredInfo/FeaturedInfo";
import { Chart } from "../../chart/Chart";
import { userData } from "../../../dummyData";
import "./home.css";

interface Props {}

export const Home: React.FC<Props> = (props: any): any => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homwWidget"></div>
    </div>
  );
};
