import React from "react";
import "./widgetSm.css";
import VisibilityIcon from "@mui/icons-material/Visibility";

interface Props {}

export const WidgetSm: React.FC<Props> = (props: any): any => {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Joined Memebers</span>
      <ul className="widgetSmallList">
        <li className="widgetSmListItem">
          <img
            src="https://media-exp1.licdn.com/dms/image/C560BAQHgMOc88iPV6g/company-logo_200_200/0/1578911344580?e=2159024400&v=beta&t=WfQV2bAVy28VrvjaVFELLmOHYSgYjXtMte1e0cEGpJc"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Jalal</span>
            <span className="widgetSmUserTitle">Manager</span>
          </div>
          <button className="widgetSmButton"></button>
          <VisibilityIcon />
          Display
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://media-exp1.licdn.com/dms/image/C560BAQHgMOc88iPV6g/company-logo_200_200/0/1578911344580?e=2159024400&v=beta&t=WfQV2bAVy28VrvjaVFELLmOHYSgYjXtMte1e0cEGpJc"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Jalal</span>
            <span className="widgetSmUserTitle">Manager</span>
          </div>
          <button className="widgetSmButton"></button>
          <VisibilityIcon />
          Display
        </li>{" "}
        <li className="widgetSmListItem">
          <img
            src="https://media-exp1.licdn.com/dms/image/C560BAQHgMOc88iPV6g/company-logo_200_200/0/1578911344580?e=2159024400&v=beta&t=WfQV2bAVy28VrvjaVFELLmOHYSgYjXtMte1e0cEGpJc"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Jalal</span>
            <span className="widgetSmUserTitle">Manager</span>
          </div>
          <button className="widgetSmButton"></button>
          <VisibilityIcon />
          Display
        </li>{" "}
        <li className="widgetSmListItem">
          <img
            src="https://media-exp1.licdn.com/dms/image/C560BAQHgMOc88iPV6g/company-logo_200_200/0/1578911344580?e=2159024400&v=beta&t=WfQV2bAVy28VrvjaVFELLmOHYSgYjXtMte1e0cEGpJc"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Jalal</span>
            <span className="widgetSmUserTitle">Manager</span>
          </div>
          <button className="widgetSmButton"></button>
          <VisibilityIcon />
          Display
        </li>{" "}
        <li className="widgetSmListItem">
          <img
            src="https://media-exp1.licdn.com/dms/image/C560BAQHgMOc88iPV6g/company-logo_200_200/0/1578911344580?e=2159024400&v=beta&t=WfQV2bAVy28VrvjaVFELLmOHYSgYjXtMte1e0cEGpJc"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Jalal</span>
            <span className="widgetSmUserTitle">Manager</span>
          </div>
          <button className="widgetSmButton"></button>
          <VisibilityIcon className="widgetSmIcon" />
          Display
        </li>
      </ul>
    </div>
  );
};
