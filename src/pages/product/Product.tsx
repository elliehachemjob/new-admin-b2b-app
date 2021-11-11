import React from "react";
import "./product.css";
import { Link } from "react-router-dom";
import { Chart } from "../../components/chart/Chart";
import { productData } from "../../dummyData";

interface Props {}

export const Product: React.FC<Props> = (props: any): any => {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart
            data={productData}
            dataKey="Sales"
            title="Sales Performance"
            grid={false}
          />
        </div>
        <div className="productTopRight"></div>
      </div>
      <div className="productBottom"></div>
    </div>
  );
};
