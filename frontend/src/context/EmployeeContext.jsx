import { createContext, useContext, useMemo, useState } from "react";

const EmployeeContext = createContext(null);

export function EmployeeProvider({ children }) {
  const [selectedEmployee, setSelectedEmployeeState] = useState(
    () => localStorage.getItem("selectedEmployee") || "",
  );
  const [selectedEmployeeId, setSelectedEmployeeId] = useState(
    () => localStorage.getItem("selectedEmployeeId") || "",
  );

  const setSelectedEmployee = (employeeName, employeeId = "") => {
    const normalizedName = employeeName.trim();
    setSelectedEmployeeState(normalizedName);

    if (normalizedName) {
      localStorage.setItem("selectedEmployee", normalizedName);
      setSelectedEmployeeId(employeeId);
      if (employeeId) localStorage.setItem("selectedEmployeeId", employeeId);
      else localStorage.removeItem("selectedEmployeeId");
    } else {
      localStorage.removeItem("selectedEmployee");
      localStorage.removeItem("selectedEmployeeId");
      setSelectedEmployeeId("");
    }
  };

  const value = useMemo(
    () => ({ selectedEmployee, selectedEmployeeId, setSelectedEmployee }),
    [selectedEmployee, selectedEmployeeId],
  );

  return (
    <EmployeeContext.Provider value={value}>
      {children}
    </EmployeeContext.Provider>
  );
}

// This module intentionally exports the provider and its matching hook.
// eslint-disable-next-line react-refresh/only-export-components
export function useEmployee() {
  const context = useContext(EmployeeContext);

  if (!context) {
    throw new Error("useEmployee must be used inside EmployeeProvider");
  }

  return context;
}
