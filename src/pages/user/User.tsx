import "./user.css";

import React, { useState } from "react";

interface Props {}

export const User: React.FC<Props> = (props: any): any => {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle"> Edit User</h1>
        <button className="userAddButton">Create</button>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://media-exp1.licdn.com/dms/image/C560BAQHgMOc88iPV6g/company-logo_200_200/0/1578911344580?e=2159024400&v=beta&t=WfQV2bAVy28VrvjaVFELLmOHYSgYjXtMte1e0cEGpJc"
              alt=""
              className="userShowImage"
            />
          </div>
          <div className="userShowBottom"></div>
        </div>

        <div className="userUpdate"></div>
      </div>
    </div>
  );
};
