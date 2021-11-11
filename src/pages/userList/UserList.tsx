import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./userList.css";

interface Props {}

export const UserList: React.FC<Props> = (props: any): any => {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "username", headerName: "Username", width: 130 },
    { field: "email", headerName: "Email", width: 130 },
    {
      field: "Status",
      headerName: "Status",
      width: 90,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume ",
      width: 90,
    },
  ];

  const rows = [
    {
      id: 1,
      username: "Jalal",
      avatar:
        "https://media-exp1.licdn.com/dms/image/C560BAQHgMOc88iPV6g/company-logo_200_200/0/1578911344580?e=2159024400&v=beta&t=WfQV2bAVy28VrvjaVFELLmOHYSgYjXtMte1e0cEGpJc",
      email: "jalal@gmail.com",
      status: "active",
      transaction: "120.00$",
    },
    {
      id: 2,
      username: "Jalal",
      avatar:
        "https://media-exp1.licdn.com/dms/image/C560BAQHgMOc88iPV6g/company-logo_200_200/0/1578911344580?e=2159024400&v=beta&t=WfQV2bAVy28VrvjaVFELLmOHYSgYjXtMte1e0cEGpJc",
      email: "jalal@gmail.com",
      status: "active",
      transaction: "120.00$",
    },
    {
      id: 3,
      username: "Jalal",
      avatar:
        "https://media-exp1.licdn.com/dms/image/C560BAQHgMOc88iPV6g/company-logo_200_200/0/1578911344580?e=2159024400&v=beta&t=WfQV2bAVy28VrvjaVFELLmOHYSgYjXtMte1e0cEGpJc",
      email: "jalal@gmail.com",
      status: "active",
      transaction: "120.00$",
    },
    {
      id: 4,
      username: "Jalal",
      avatar:
        "https://media-exp1.licdn.com/dms/image/C560BAQHgMOc88iPV6g/company-logo_200_200/0/1578911344580?e=2159024400&v=beta&t=WfQV2bAVy28VrvjaVFELLmOHYSgYjXtMte1e0cEGpJc",
      email: "jalal@gmail.com",
      status: "active",
      transaction: "120.00$",
    },
    {
      id: 5,
      username: "Jalal",
      avatar:
        "https://media-exp1.licdn.com/dms/image/C560BAQHgMOc88iPV6g/company-logo_200_200/0/1578911344580?e=2159024400&v=beta&t=WfQV2bAVy28VrvjaVFELLmOHYSgYjXtMte1e0cEGpJc",
      email: "jalal@gmail.com",
      status: "active",
      transaction: "120.00$",
    },
    {
      id: 6,
      username: "Jalal",
      avatar:
        "https://media-exp1.licdn.com/dms/image/C560BAQHgMOc88iPV6g/company-logo_200_200/0/1578911344580?e=2159024400&v=beta&t=WfQV2bAVy28VrvjaVFELLmOHYSgYjXtMte1e0cEGpJc",
      email: "jalal@gmail.com",
      status: "active",
      transaction: "120.00$",
    },
    {
      id: 7,
      username: "Jalal",
      avatar:
        "https://media-exp1.licdn.com/dms/image/C560BAQHgMOc88iPV6g/company-logo_200_200/0/1578911344580?e=2159024400&v=beta&t=WfQV2bAVy28VrvjaVFELLmOHYSgYjXtMte1e0cEGpJc",
      email: "jalal@gmail.com",
      status: "active",
      transaction: "120.00$",
    },
    {
      id: 8,
      username: "Jalal",
      avatar:
        "https://media-exp1.licdn.com/dms/image/C560BAQHgMOc88iPV6g/company-logo_200_200/0/1578911344580?e=2159024400&v=beta&t=WfQV2bAVy28VrvjaVFELLmOHYSgYjXtMte1e0cEGpJc",
      email: "jalal@gmail.com",
      status: "active",
      transaction: "120.00$",
    },
    {
      id: 9,
      username: "Jalal",
      avatar:
        "https://media-exp1.licdn.com/dms/image/C560BAQHgMOc88iPV6g/company-logo_200_200/0/1578911344580?e=2159024400&v=beta&t=WfQV2bAVy28VrvjaVFELLmOHYSgYjXtMte1e0cEGpJc",
      email: "jalal@gmail.com",
      status: "active",
      transaction: "120.00$",
    },
    {
      id: 10,
      username: "Jalal",
      avatar:
        "https://media-exp1.licdn.com/dms/image/C560BAQHgMOc88iPV6g/company-logo_200_200/0/1578911344580?e=2159024400&v=beta&t=WfQV2bAVy28VrvjaVFELLmOHYSgYjXtMte1e0cEGpJc",
      email: "jalal@gmail.com",
      status: "active",
      transaction: "120.00$",
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};
