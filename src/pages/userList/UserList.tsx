import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./userList.css";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { userRows } from "../../dummyData";
interface Props {}

export const UserList: React.FC<Props> = (props: any): any => {
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params: any) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "Status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume ",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action ",
      width: 150,
      renderCell: (params: any) => {
        return (
          <>
            <button className="userListEdit">Edit</button>
            <DeleteOutlineIcon className="userListDelete" />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={userRows}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};
