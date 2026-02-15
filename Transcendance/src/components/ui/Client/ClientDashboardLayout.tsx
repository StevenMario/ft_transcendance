import { Outlet } from "react-router-dom";

function ClientDashboardLayout() {
  return (
    <div>
      <h1>Client Dashboard</h1>
      <Outlet />
    </div>
  );
}

export default ClientDashboardLayout;