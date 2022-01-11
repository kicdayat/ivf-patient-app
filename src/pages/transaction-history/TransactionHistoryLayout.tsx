import { Outlet } from "react-router-dom";

const TransactionHistoryLayout = () => {
  return (
    <>
      <h1 className="text-2xl font-bold">Transaction History</h1>
      <Outlet />
    </>
  );
};

export default TransactionHistoryLayout;
