"use client";

import { columns, Payment } from "./columns";
import { DataTable } from "./data-table";

const getData = async (): Promise<Payment[]> => {
  return [
    {
      id: "728ed52f",
      amount: 100,
      username: "Sir Drey",
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52z",
      amount: 200,
      username: "Sir Drey2",
      status: "failed",
      email: "m2@example.com",
    },
    {
      id: "728ed52fb",
      amount: 300,
      username: "Sir Drey3",
      status: "success",
      email: "m3@example.com",
    },
    {
      id: "728ed52fb",
      amount: 300,
      username: "Sir Drey3",
      status: "pending",
      email: "m3@example.com",
    },
    {
      id: "728ed52fb",
      amount: 300,
      username: "Sir Drey3",
      status: "failed",
      email: "m3@example.com",
    },
    {
      id: "489e1d42",
      amount: 125,
      username: "Sir Drey4",
      status: "success",
      email: "example@gmail.com",
    },
    {
      id: "489e1d43",
      amount: 127,
      username: "Sir Drey5",
      status: "success",
      email: "example2@gmail.com",
    },
    {
      id: "489e1d43",
      amount: 127,
      username: "Sir Drey5",
      status: "failed",
      email: "example2@gmail.com",
    },
    {
      id: "489e1d43",
      amount: 127,
      username: "Sir Drey5",
      status: "pending",
      email: "example2@gmail.com",
    },
     {
      id: "728ed52fb",
      amount: 300,
      username: "Sir Drey3",
      status: "failed",
      email: "m3@example.com",
    },
    {
      id: "489e1d43",
      amount: 127,
      username: "Sir Drey5",
      status: "pending",
      email: "example2@gmail.com",
    },
    {
      id: "489e1d43",
      amount: 127,
      username: "Sir Drey5",
      status: "pending",
      email: "example2@gmail.com",
    },
    {
      id: "728ed52fb",
      amount: 300,
      username: "Sir Drey3",
      status: "success",
      email: "m3@example.com",
    },
    {
      id: "489e1d43",
      amount: 127,
      username: "Sir Drey5",
      status: "pending",
      email: "example2@gmail.com",
    },
     {
      id: "728ed52fb",
      amount: 300,
      username: "Sir Drey3",
      status: "failed",
      email: "m3@example.com",
    },
    {
      id: "489e1d43",
      amount: 127,
      username: "Sir Drey5",
      status: "pending",
      email: "example2@gmail.com",
    },
    {
      id: "489e1d43",
      amount: 127,
      username: "Sir Drey5",
      status: "pending",
      email: "example2@gmail.com",
    },
    {
      id: "728ed52fb",
      amount: 300,
      username: "Sir Drey3",
      status: "success",
      email: "m3@example.com",
    },
     {
      id: "728ed52fb",
      amount: 300,
      username: "Sir Drey3",
      status: "failed",
      email: "m3@example.com",
    },
    {
      id: "489e1d43",
      amount: 127,
      username: "Sir Drey5",
      status: "pending",
      email: "example2@gmail.com",
    },
    {
      id: "728ed52fb",
      amount: 300,
      username: "Sir Drey3",
      status: "success",
      email: "m3@example.com",
    },
    {
      id: "489e1d43",
      amount: 127,
      username: "Sir Drey5",
      status: "pending",
      email: "example2@gmail.com",
    },
  ];
};

const paymentsPage = async () => {
  const data = await getData();

  return (
    <div className="">
      <div className="mb-8 px-4 py-2 b-secondary rounded-md">
        <h1 className="font-semibold">All Payments</h1>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default paymentsPage;
