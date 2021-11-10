import React from "react";
import { FeaturedInfo } from "../../featuredInfo/FeaturedInfo";
import "./home.css";

interface Props {}

export const Home: React.FC<Props> = (props: any): any => {
  return (
    <div className="home">
      <FeaturedInfo />
    </div>
  );
};
