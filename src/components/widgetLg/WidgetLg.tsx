import React from "react";
import "./widgetLg.css";

interface Props {}

export const WidgetLg: React.FC<Props> = (props: any): any => {
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh"> Customer</th>
          <th className="widgetLgTh"> Date</th>
          <th className="widgetLgTh"> Amount</th>
          <th className="widgetLgTh"> Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://media-exp1.licdn.com/dms/image/C560BAQHgMOc88iPV6g/company-logo_200_200/0/1578911344580?e=2159024400&v=beta&t=WfQV2bAVy28VrvjaVFELLmOHYSgYjXtMte1e0cEGpJc"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Sam</span>
          </td>
          <td className="widgetLgDate"> 2 june 2021</td>
          <td className="widgetLgAmount"> $122.00</td>
          <td className="widgetLgStatus"> </td>
        </tr>
      </table>
    </div>
  );
};
