import { createContext, useContext, useMemo, useState } from "react";

const EmployeeContext = createContext(null);

export function EmployeeProvider({ children }) {
  const [selectedEmployee, setSelectedEmployeeState] = useState(
    () => localStorage.getItem("selectedEmployee") || "",
  );

  const setSelectedEmployee = (employeeName) => {
    const normalizedName = employeeName.trim();
    setSelectedEmployeeState(normalizedName);

    if (normalizedName) {
      localStorage.setItem("selectedEmployee", normalizedName);
    } else {
      localStorage.removeItem("selectedEmployee");
    }
  };

  const value = useMemo(
    () => ({ selectedEmployee, setSelectedEmployee }),
    [selectedEmployee],
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
