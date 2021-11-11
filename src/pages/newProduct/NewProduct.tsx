import React from "react";
import "./newProduct.css";

interface Props {}

export const NewProduct: React.FC<Props> = (props: any): any => {
  return (
    <div className="newProduct">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label className="">Username</label>
          <input type="text" placeholder="Ellie" />
        </div>
        <div className="newUserItem">
          <label className="">Full Name</label>
          <input type="text" placeholder="Ellie Hachem" />
        </div>
        <div className="newUserItem">
          <label className="">Email</label>
          <input type="text" placeholder="ellie@gmail.com" />
        </div>
        <div className="newUserItem">
          <label className="">Password</label>
          <input type="password" placeholder="password" />
        </div>
        <div className="newUserItem">
          <label className="">Phone</label>
          <input type="text" placeholder="=1 234 423 78 " />
        </div>
        <div className="newUserItem">
          <label className="">Address</label>
          <input type="text" placeholder="New York " />
        </div>
        <div className="newUserItem">
          <label className="">Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label htmlFor="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label htmlFor="other">Other</label>
          </div>
        </div>
        <div className="newUserItem">
          <div>Active</div>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  );
};
