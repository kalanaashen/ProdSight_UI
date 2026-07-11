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
    <div className="flex min-h-80 w-full flex-col justify-between rounded-2xl border border-slate-700 bg-slate-900/70 p-6 shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:border-slate-600">
        <div className="flex flex-row items-center gap-4">
          <div className="bg-sky-400 w-10 h-10 rounded-full flex items-center justify-center font-semibold text-lg text-white">
            {name?.[0]?.toUpperCase() ?? "?"}
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold text-xl text-white">{name}</h1>
            <h1 className="text-sm font-medium text-gray-400">{role}</h1>
          </div>
        </div>

        <div className="flex flex-col pb-0.5">
          <ProgessBar progress={pro_score} title={"Productivity Score"} />
          <ProgessBar progress={foc_score} title={"Focus Score"} />
        </div>
        <div className="h-px rounded-full bg-slate-700"></div>
        <div className="flex flex-row justify-between pt-2">
          <div className="flex flex-col p-0.5">
            <h1 className="text-white text-sm">Active Time</h1>
            <h1 className="font-bold text-white">{activetime}</h1>
          </div>
          <div className="flex flex-col p-0.5">
            <h1 className="text-white text-sm">Idle Time</h1>
            <h1 className="font-bold text-white ">{idletime}</h1>
          </div>
        </div>
    </div>
  );
};
