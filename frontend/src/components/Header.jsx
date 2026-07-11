import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useEmployee } from "../context/EmployeeContext";
import { getEmployeeByName } from "../api/employeeApi";
import { getApiErrorMessage } from "../api/apiHelpers";

export const Header = () => {
  const { selectedEmployee, setSelectedEmployee } = useEmployee();
  const [searchValue, setSearchValue] = useState(selectedEmployee);
  const [searchError, setSearchError] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const searchEmployee = async (event) => {
    event.preventDefault();
    if (!searchValue.trim()) return;

    setIsSearching(true);
    setSearchError("");
    try {
      const employee = await getEmployeeByName(searchValue.trim());
      setSelectedEmployee(employee.name, employee._id);
      if (location.pathname === "/employee") navigate("/activity");
    } catch (error) {
      setSearchError(getApiErrorMessage(error, "Employee not found."));
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <div className="bg-slate-800 w-full p-4">
      <div  className="flex flex-row justify-between">
        <form className="flex flex-row items-center gap-3" onSubmit={searchEmployee}>
          <input
            type="text"
            placeholder="Search employee by username"
            className=" border border-slate-400 outline-none hover:ring hover:ring-blue-400 rounded-2xl text-white py-1 px-4"
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
            aria-label="Employee username"
          />
          <button disabled={isSearching} type="submit" className="disabled:opacity-50 bg-slate-700 text-white font-bold hover:bg-slate-600 hover:scale-105 rounded-2xl py-1 px-5">
            {isSearching ? "Searching…" : "Search"}
          </button>
          {selectedEmployee && (
            <span className="text-sm text-slate-300">Viewing: {selectedEmployee}</span>
          )}
          {searchError && <span className="text-sm text-red-300">{searchError}</span>}
        </form>
        <div className="flex flex-row gap-1.5">
          <div>
            <h1 className=" flex items-center justify-center font-bold text-white bg-blue-500 rounded-full h-10 w-10 ">
              K
            </h1>
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="font-bold text-white">Kalana Ashen</h1>
            <h1 className="font-semibold text-gray-500">Admin</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
