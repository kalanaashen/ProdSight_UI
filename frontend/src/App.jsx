import LoginPage from "./pages/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router";
import { RegisterPage } from "./pages/RegisterPage";
import { ActivityPage } from "./pages/ActivityPage";
import { EmployeePage } from "./pages/EmployeePage";
import { WebUsagePage } from "./pages/WebUsagePage";
import { AppUsagePage } from "./pages/AppUsagePage";
import { AdminLayout } from "./layouts/AdminLayout";
import { EmployeeProvider } from "./context/EmployeeContext";

function App() {
  return (
    <BrowserRouter>
      <EmployeeProvider>
       <Routes>
        <Route path="/" element={<AdminLayout />}>
          <Route index element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="activity" element={<ActivityPage />} />
          <Route path="employee" element={<EmployeePage />} />
          <Route path="web" element={<WebUsagePage />} />
          <Route path="app" element={<AppUsagePage />} />
        </Route>

        {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
       </Routes>
      </EmployeeProvider>
    </BrowserRouter>
  );
}

export default App;
