import React from "react";
import "./sidebar.css";
import LineStyleIcon from "@mui/icons-material/LineStyle";

interface Props {}

export const SideBar: React.FC<Props> = (props: any): any => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <LineStyleIcon />
              Home
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
