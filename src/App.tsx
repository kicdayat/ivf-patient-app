import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import PatientAppLayout from "layouts/PatientAppLayout";

// PAGE IMPORTS
import LoginPage from "pages/LoginPage";
import SignupPage from "pages/SignupPage";
import ForgotPasswordPage from "pages/ForgotPasswordPage";
import ResetPasswordPage from "pages/ResetPasswordPage";
import DashboardPage from "pages/DashboardPage";
import IVFTrackListPage from "pages/ivf-track/IVFTrackListPage";
import IVFTrackLayout from "./pages/ivf-track/IVFTrackLayout";
import TransactionHistoryLayout from "pages/transaction-history/TransactionHistoryLayout";
import TransactionHistoryList from "pages/transaction-history/TransactionHistoryList";
import MyPatientLayout from "pages/my-patients/MyPatientsLayout";
import MyPatientsListPage from "pages/my-patients/MyPatientsListPage";
import BookingPage from "pages/booking/BookingPage";

import { useAuth } from "contexts/authContext";

function RequireAuth({ children }: { children: JSX.Element }) {
  let auth = useAuth();
  let location = useLocation();

  if (!auth.isInitialized) {
    return null;
  }

  if (auth.isInitialized && !auth.isAuthenticated) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
      </Routes>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <PatientAppLayout />
            </RequireAuth>
          }
        >
          <Route index element={<Navigate to="/dashboard" />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="booking" element={<BookingPage />} />
          <Route path="ivf-track" element={<IVFTrackLayout />}>
            <Route index element={<IVFTrackListPage />} />
          </Route>
          <Route
            path="transaction-history"
            element={<TransactionHistoryLayout />}
          >
            <Route index element={<TransactionHistoryList />} />
          </Route>
          <Route path="my-patients" element={<MyPatientLayout />}>
            <Route index element={<MyPatientsListPage />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
