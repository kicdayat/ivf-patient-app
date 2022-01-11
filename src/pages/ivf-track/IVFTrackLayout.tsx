import { Outlet } from "react-router-dom";

const IVFTrackLayout = () => {
  return (
    <>
      <h1 className="text-2xl font-bold">IVF Procedure Track</h1>
      <Outlet />
    </>
  );
};

export default IVFTrackLayout;
