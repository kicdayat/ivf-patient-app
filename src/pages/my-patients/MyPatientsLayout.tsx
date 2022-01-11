import { Outlet } from "react-router-dom";

const MyPatientLayout = () => {
  return (
    <>
      <h1 className="text-2xl font-bold">My Patients</h1>
      <Outlet />
    </>
  );
};

export default MyPatientLayout;
