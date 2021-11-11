import React from "react";
import { FeaturedInfo } from "../../components/featuredInfo/FeaturedInfo";
import { Chart } from "../../components/chart/Chart";
import { userData } from "../../dummyData";
import "./home.css";
import { WidgetSm } from "../../components/widgetSm/WidgetSm";
import { WidgetLg } from "../../components/widgetLg/WidgetLg";

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
      <div className="homwWidget">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};
