import React from "react";
import "./topbar.css";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

interface Props {}

export const TopBar: React.FC<Props> = (props: any): any => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIcon">
            <NotificationsNoneIcon />
          </div>
        </div>
      </div>
    </div>
  );
};
