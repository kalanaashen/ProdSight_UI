import React from "react";
import ProgessBar from "../ProgressBar";
export const EmployeeCard = ({
  name,
  role,
  pro_score,
  foc_score,
  activetime,
  idletime,
}) => {
  return (
    <div>
      <div className="border border-gray-600 rounded-2xl p-10 bg-black/20 w-80  h-80 flex flex-col justify-between">
        <div className="flex flex-row items-center gap-4">
          <div className="bg-sky-400 w-10 h-10 rounded-full flex items-center justify-center font-semibold text-lg text-white">
            {name[0].toUpperCase()}
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold text-xl text-white">{name}</h1>
            <h1 className="text-gray-400">{role}</h1>
          </div>
        </div>

        <div className="flex flex-col ">
          <ProgessBar progress={pro_score} title={"Productivity Score"} />
          <ProgessBar progress={foc_score} title={"Focus Score"} />
        </div>
        <div className=" h-0.5 p-0.5 rounded-full bg-gray-500 "></div>
        <div className="flex flex-row justify-between pt-2">
          <div className="flex flex-col p-0.5">
            <h1 className="text-white text-sm">Active Time</h1>
            <h1 className="text-bold text-white">{activetime}</h1>
          </div>
          <div className="flex flex-col p-0.5">
            <h1 className="text-white text-sm">Idle Time</h1>
            <h1 className="text-bold text-white ">{idletime}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
