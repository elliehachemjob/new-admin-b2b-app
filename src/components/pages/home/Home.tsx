import React from "react";
import { FeaturedInfo } from "../../featuredInfo/FeaturedInfo";
import { Chart } from "../../chart/Chart";

import "./home.css";

interface Props {}

export const Home: React.FC<Props> = (props: any): any => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart />
    </div>
  );
};
