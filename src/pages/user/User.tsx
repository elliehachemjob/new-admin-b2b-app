import "./user.css";

import React, { useState } from "react";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import PublishIcon from "@mui/icons-material/Publish";
import { Link } from "react-router-dom";

interface Props {}

export const User: React.FC<Props> = (props: any): any => {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle"> Edit User</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://media-exp1.licdn.com/dms/image/C560BAQHgMOc88iPV6g/company-logo_200_200/0/1578911344580?e=2159024400&v=beta&t=WfQV2bAVy28VrvjaVFELLmOHYSgYjXtMte1e0cEGpJc"
              alt=""
              className="userShowImage"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Jalal</span>
              <span className="userShowUseTitle">Manager</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentityIcon className="userShowIcon" />
              <span className="userShowInfoTitle">Jalal</span>
            </div>
            <div className="userShowInfo">
              <CalendarTodayIcon className="userShowIcon" />
              <span className="userShowInfoTitle">4234</span>
            </div>{" "}
            <div className="userShowInfo">
              <PhoneAndroidIcon className="userShowIcon" />
              <span className="userShowInfoTitle">10.1/1990</span>
            </div>{" "}
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <MailOutlineIcon className="userShowIcon" />
              <span className="userShowInfoTitle">Jalal11@gmail.com</span>
            </div>{" "}
            <div className="userShowInfo">
              <LocationSearchingIcon className="userShowIcon" />
              <span className="userShowInfoTitle">Jalal11</span>
            </div>
          </div>
        </div>

        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdatForm">
            <div className="userUpdateLeft">
              <div className="userUpdatItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="Jalal"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdatItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="Jalal"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdatItem">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Jalal"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdatItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="Jalal"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdatItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="Jalal"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdatItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="Jalal"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  src="https://media-exp1.licdn.com/dms/image/C560BAQHgMOc88iPV6g/company-logo_200_200/0/1578911344580?e=2159024400&v=beta&t=WfQV2bAVy28VrvjaVFELLmOHYSgYjXtMte1e0cEGpJc"
                  alt=""
                  className="userUpdateImg"
                />
                <label htmlFor="file">
                  <PublishIcon className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
