import React from "react";
import { useUser } from "@clerk/clerk-react";
import { useFinancialRecords } from "../../contexts/financial.context";
import AddRecordForm from "./AddRecordForm";
import FinancialRecordTable from "./FinancialRecordTable";

const Dashboard = () => {
  const { user } = useUser();
  const { records } = useFinancialRecords();
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <div className="text-center text-3xl md:text-4xl md:leading-snug font-bold my-2">
        Welcome {user?.firstName}!Here are you finance:
      </div>
      <AddRecordForm />
      <div>Total Monthly:0000฿</div>
      <FinancialRecordTable />
    </div>
  );
};

export default Dashboard;
